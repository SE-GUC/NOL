const axios = require('axios')
const url = "http://localhost:3000"
const userurl = "/MUN/signin/MUNadmins/"

const functions  = {
    
    UserSignUp : async (user) => {
        const newuser = await axios({
            method : 'post',
            url : url+"/MUN/signup/",
            headers : {},
            data : user
        })
        return newuser.data
    },
    UserSignIn : async(user) => {
        const signin = await axios({
            method : 'post',
            url : url+userurl,
            headers : {},
            data : user
        })
        return signin.data
    },
    getUsers : async () => {
        const users = await axios.get(url+userurl+"munusers")
        return users.data
    },
    getUser : async (id) => {
        const user = await axios.get(url+userurl+"munusers/"+id)
        return user.data
    },
    updateUser : async (id, user) => {
        const edituser = await axios({
            method : 'put',
            url : url+userurl+"munusers/"+id,
            headers : {},
            data : user
        })
        return edituser.data
    },
    deleteUser : async (id) => {
        const user = await axios.delete(url+userurl+"munusers/"+id)
        return user.data
    },
    AddAboutUs : async (aboutus) => {
        const newaboutUs = await axios({
            method : 'post',
            url : url+userurl+"aboutus",
            headers : {},
            data : aboutus
        })
        return newaboutUs.data
    },
    getAboutUs : async() => {
        const aboutUs = await axios.get(url+userurl+"aboutus")
        return aboutUs.data
    },
    getAboutUsByClubName : async (id) => {
        const aboutUs = await axios.get(url+userurl+"aboutus/"+id)
        return aboutUs.data
    },
    updateAboutUs : async (id, aboutus) => {
        const editaboutUs = await axios({
            method : 'put',
            url : url+userurl+"aboutus/"+id,
            headers : {},
            data : aboutus
        })
        return editaboutUs.data
    },
    deleteAboutUs : async (id) => {
        const aboutUs  = await axios.delete(url+userurl+"aboutus/"+id)
        return aboutUs.data
    }
}
module.exports = functions