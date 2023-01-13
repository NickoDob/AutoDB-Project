const {Mark} = require('../models/models')
const ApiError = require('../error/ApiError');

class MarkController {
    async create(req, res, next) {
        const {name} = req.body
        const candidate = await Mark.findOne({where: {name}})
        if (candidate) {
            return next(ApiError.badRequest('Такая марка уже существует'))
        }
        const mark = await Mark.create({name})
        return res.json(mark)
    }

    async getAll(req, res) {
        const marks = await Mark.findAll()
        return res.json(marks)
    }

    async check(req, res, next) {
        const token = generateJwt(req.mark.id, req.mark.name, req.user.role)
        return res.json({token})
    }

}

module.exports = new MarkController()
