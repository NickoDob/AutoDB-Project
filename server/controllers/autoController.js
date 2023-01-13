const uuid = require('uuid')
const path = require('path');
const {Auto, AutoInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class AutoController {
    async create(req, res, next) {
            const {num, color, created, markId, info} = req.body
            const candidate = await Auto.findOne({where: {num}})
            if (candidate) {
                return next(ApiError.internal('Автомобиль с таким номером уже существует'))
            }
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const auto = await Auto.create({num, color, created, markId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    AutoInfo.create({
                        title: i.title,
                        description: i.description,
                        markId: mark.id
                    })
                )
            }
            return res.json(auto)
    }


    // Delete Method
    async delete(req, res) {
        const {num, color, created, markId, info} = req.body
        const auto = await Auto.delete({num, color, created, markId, img: fileName});
        return res.json(auto)
    }


    async getAll(req, res) {
        let {markId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let autos;
        if (!markId) {
            autos = await Auto.findAndCountAll({limit, offset})
        }
        if (markId) {
            autos = await Auto.findAndCountAll({where:{markId}, limit, offset})
        }
        return res.json(autos)
    }

    async getOne(req, res) {
        const {id} = req.params
        const auto = await Auto.findOne(
            {
                where: {id},
                include: [{model: AutoInfo, as: 'info'}]
            },
        )
        return res.json(auto)
    }
}

module.exports = new AutoController()
