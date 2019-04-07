const axios = require('axios')

//const adapter = require('axios/lib/adapters/http')
const aurl = "http://localhost:3000/MUN/signin/MUNadmins"
const uurl = "http://localhost:3000/MUN/signin/MUNusers"
const curl="http://localhost:3000/committiees"
const awgurl="http://localhost:3000/AWG_AboutUs"
const awaurl="http://localhost:3000/AWG/signin/admin"
const functions = {
    
    
    getCommittieeById : async (id) => {
        const committiees = await axios.get(curl+"/"+id)
        return committiees.data
    },
    getCommittiee : async () => {
        const committiees = await axios.get(curl+"/");
        return committiees.data
    },
    createCommittiee : async (e) => {
    
        const committiees = await axios({
            method : 'post',
            url : curl+"/",
            headers : {},
            data : e
        })
        return committiees.data
        
    },
    updateCommittiee: async (id, e) => {
        const committiees = await axios({
            method : 'put',
            url : curl+"/"+id,
            headers : {},
            data : e
        })
        return committiees.data
    },
    deleteCommittiee : async (id) => {
        const committiees = await axios.delete(curl+"/"+id)
        return committiees.data
    },

    getAWG_AboutUsById : async (id) => {
        const AWG = await axios.get(awgurl+"/"+id)
        return AWG.data
    },
    getAWG_AboutUs : async () => {
        const AWG = await axios.get(awgurl+"/")
        return AWG.data
    },
    createAWG_AboutUs: async (e) => {
        const AWG = await axios({
            method : 'post',
            url : awgurl+"/",
            headers : {},
            data : e
        })
        return AWG.data
    },
    updateAWG_AboutUs: async (id, e) => {
        const AWG = await axios({
            method : 'put',
            url : awgurl+"/"+id,
            headers : {},
            data : e
        })
        return AWG.data
    },
    deleteAWG_AboutUs : async (id) => {
        const AWG = await axios.delete(awgurl+"/"+id)
        return AWG.data
    },

    AWGadminGetAWG_AboutUsById : async (id) => {
        const AWG = await axios.get(awaurl+"/aboutUs/"+id)
        return AWG.data
    },
    AWGadminGetAWG_AboutUs : async () => {
        const AWG = await axios.get(awaurl+"/aboutUs")
        return AWG.data
    },
    AWGadminCreateAWG_AboutUs: async (e) => {
        const AWG = await axios({
            method : 'post',
            url : awaurl+"/createAboutUs",
            headers : {},
            data : e
        })
        return AWG.data
    },
    AWGadminUpdateAWG_AboutUs: async (id, e) => {
        const AWG = await axios({
            method : 'put',
            url : awaurl+"/aboutUs/"+id,
            headers : {},
            data : e
        })
        return AWG.data
    },
    AWGadminDeleteAWG_AboutUs : async (id) => {
        const AWG = await axios.delete(awaurl+"/aboutUs/"+id)
        return AWG.data
    },
    AWGadminUpdateFAQs: async (id, e) => {
        const AWG = await axios({
            method : 'put',
            url : awaurl+"/updateFAQ/"+id,
            headers : {},
            data : e
        })
        return AWG.data
    },
    MUNadminGetCommittieeById : async (id) => {
        const committiees = await axios.get(aurl+"/allCommittiees/"+id)
        return committiees.data
    },
    MUNadminGetCommittiee : async () => {
        const committiees = await axios.get(aurl+"/allCommittiees")
        return committiees.data
    },
    MUNadminCreateCommittiee : async (e) => {
        const committiees = await axios({
            method : 'post',
            url : aurl+"/committiee",
            headers : {},
            data : e
        })
        return committiees.data
    },
    MUNadminUpdateCommittiee: async (id, e) => {
        const committiees = await axios({
            method : 'put',
            url : aurl+"/committiee/"+id,
            headers : {},
            data : e
        })
        return committiees.data
    },
    MUNadminDeleteCommittiee : async (id) => {
        const committiees = await axios.delete(aurl+"/committiee/"+id)
        return committiees.data
    },
    MUNuserGetAWG_AboutUsById : async (id) => {
        const AWG = await axios.get(uurl+"/AWG_AboutUs/"+id)
        return AWG.data
    },
    MUNuserGetAWG_AboutUs : async () => {
        const AWG = await axios.get(uurl+"/AWG_AboutUs/")
        return AWG.data
    }


}
module.exports = functions