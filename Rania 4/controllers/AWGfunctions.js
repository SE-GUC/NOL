const axios = require('axios')
const url = "http://localhost:3000/AWG/signin/admin"
const AWGadminurl = "http://localhost:3000/AWG/signup/admin"
const announcementnurl = "http://localhost:3000/announcement"

const functions  = {
    
    AWGadminSignUp : async (AWGadmin) => {
        const newAWGadmin = await axios({
            method : 'post',
            url : AWGadminurl+"/AWGadmin/signup",
            headers : {},
            data : AWGadmin
        })
        return newAWGadmin.data
    },
    AWGadminSignIn : async(AWGadmin) => {
        const signin = await axios({
            method : 'post',
            url : url+"/postAWGadmin",
            headers : {},
            data : AWGadmin
        })
        return signin.data
    },
    getAWGadmins : async () => {
        const AWGadmins = await axios.get(url+"/getAWGadmin")
        return AWGadmins.data
    },
    getAWGadmins : async (id) => {
        const AWGadmin = await axios.get(url+"/getAWGadmin/"+id)
        return AWGadmin.data
    },
    updateAWGadmins : async (id, AWGadmin) => {
        const editAWGadmin = await axios({
            method : 'put',
            url : url+"/putAWGadmin/"+id,
            headers : {},
            data : AWGadmin
        })
        return editAWGadmin.data
    },
    deleteAWGadmins : async (id) => {
        const AWGadmin = await axios.delete(url+"/putAWGadmin/"+id)
        return AWGadmin.data
    },
    Addannouncements : async (announcement) => {
        const newannouncement = await axios({
            method : 'post',
            url : announcementnurl+"/create",
            headers : {},
            data : announcement
        })
        return newannouncement.data
    },
    getannouncements : async() => {
        const announcement = await axios.get(announcementnurl+"/")
        return announcement.data
    },
    getannouncementByDescription : async (id) => {
        const announcement = await axios.get(announcementnurl+"/"+id)
        return announcement.data
    },
    updateannouncement : async (id, announcement) => {
        const editannouncement = await axios({
            method : 'put',
            url : announcementnurl+"/update/"+id,
            headers : {},
            data : announcement
        })
        return editannouncement.data
    },
    deleteannouncement : async (id) => {
        const announcement  = await axios.delete(announcementnurl+"/delete/"+id)
        return announcement.data
    }
}
module.exports = functions