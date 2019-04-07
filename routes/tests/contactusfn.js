const axios = require('axios')
const url = "http://localhost:3000/contactus"

const functions = { 
    createContactUs : async (contactus) => {
        const newcontactus = await axios({
            method : 'post',
            url : url+"/",
            headers : {},
            data : contactus
        })
        return newcontactus.data
    },
    getAllContactUs : async() => {
        const contactus = await axios.get(url+"/")
        return contactus.data
    },
    getContactUs : async (id) => {
        const contactUs = await axios.get(url+"/"+id)
        return contactUs.data
    },
    updateContactUs : async (id, contactus) => {
        const editContactUs = await axios({
            method : 'put',
            url : url+"/"+id,
            headers : {},
            data : contactus
        })
        return editContactUs.data
    },
    deleteContactUs : async (id) => {
        const contactus  = await axios.delete(url+"/"+id)
        return contactus.data
    }
}
module.exports = functions