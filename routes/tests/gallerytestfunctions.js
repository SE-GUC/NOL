const axios = require('axios')
const aurl = "http://localhost:3000/MUN/signin/MUNadmins/"
const uurl = "http://localhost:3000/MUN/signin/MUNusers/"

const functions = {
    
    userGetGalleries : async () => {
        const galleries = await axios.get(uurl+"get")
        return galleries .data
    },
    userGetGallery : async (title) => {
        const gallery = await axios.get(uurl+"get/"+title)
        return gallery.data
    },
    adminGetGalleries : async () => {
        const galleries = await axios.get(aurl+"get/gallery")
        return galleries.data
    },
    adminGetGallery : async (title) => {
        const gallery = await axios.get(aurl+"get/gallery/"+title)
        return gallery.data
    },
    createGallery : async (e) => {
        const gallery = await axios({
            method : 'post',
            url : aurl+"create/gallery/",
            headers : {},
            data : e
        })
        return gallery.data
    },
    updateGallery : async (title, e) => {
        const gallery = await axios({
            method : 'put',
            url : aurl+"update/gallery/"+title,
            headers : {},
            data : e
        })
        return gallery.data
    },
    deleteGallery : async (title) => {
        const gallery = await axios.delete(aurl+"delete/gallery/"+title)
        return gallery.data
    }
}
module.exports = functions