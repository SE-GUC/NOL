const axios = require('axios')
const aurl = "http://localhost:3000/MUN/signin/MUNadmins/"
const uurl = "http://localhost:3000/MUN/signin/MUNusers/"

const functions = {
    
    userGetMerchandise : async () => {
        const merchandise = await axios.get(uurl+"get")
        return merchandise.data
    },
    userGetMerchandise : async (id) => {
        const m = await axios.get(uurl+"get/"+id)
        return m.data
    },
    adminGetMerchandise : async () => {
        const merchandise = await axios.get(aurl+"get/merchandise")
        return merchandise.data
    },
    adminGetMerchandise : async (id) => {
        const m = await axios.get(aurl+"get/merchandise/"+id)
        return m.data
    },
    createMerchandise : async (e) => {
        const m = await axios({
            method : 'post',
            url : aurl+"create/merchandise/",
            headers : {},
            data : e
        })
        return m.data
    },
    updateMerchandise : async (id, e) => {
        const m = await axios({
            method : 'put',
            url : aurl+"update/merchandise/"+id,
            headers : {},
            data : e
        })
        return m.data
    },
    deleteMerchandise : async (id) => {
        const m = await axios.delete(aurl+"delete/merchandise/"+id)
        return m.data
    }
}
module.exports = functions