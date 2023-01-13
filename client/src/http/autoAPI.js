import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createMark = async (mark) => {
    try {
        let data
        data = await $authHost.post('api/mark', mark)
        return data
    }catch(e){
        alert(e.response.data.message)
    }
}

export const fetchMarks = async () => {
    const {data} = await $host.get('api/mark', )
    return data
}

export const createAuto = async (auto) => {
    try {
        let data
        data = await $authHost.post('api/auto', auto)
        return data
    }catch(e){
        alert(e.response.data.message)
    }

}

export const deleteAuto = async (auto) => {
    try {
        let data
        data = await $authHost.post('api/auto', auto)
        return data
    }catch(e){
        alert(e.response.data.message)
    }

}


export const fetchAutos = async (markId, page, limit= 5) => {
    const {data} = await $host.get('api/auto', {params: {
            markId, page, limit
        }})
    return data
}

export const fetchOneMark = async (id) => {
    const {data} = await $host.get('api/mark/' + id)
    return data
}

export const fetchOneAuto = async (id) => {
    const {data} = await $host.get('api/auto/' + id)
    return data
}
