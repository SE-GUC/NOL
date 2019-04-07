const axios = require('axios')

//const adapter = require('axios/lib/adapters/http')
const aurl = "http://localhost:3000/MUN/signin/MUNadmins"
const uurl = "http://localhost:3000/MUN/signin/MUNusers"
const curl="http://localhost:3000/subdomain"
const awgurl="http://localhost:3000/faqs"
const awaurl="http://localhost:3000/AWG/signin/admin"
const functions = {
    
    
    getSubdomainById : async (id) => {
        const subdomains = await axios.get(curl+"/"+id)
        return subdomains.data
    },
    getSubdomain : async () => {
        const subdomains = await axios.get(curl+"/");
        return subdomains.data
    },
    createSubdomain : async (e) => {
    
        const subdomains = await axios({
            method : 'post',
            url : curl+"/create",
            headers : {},
            data : e
        })
        return subdomains.data
        
    },
    updateSubdomain: async (id, e) => {
        const subdomains = await axios({
            method : 'put',
            url : curl+"/"+id+"/update",
            headers : {},
            data : e
        })
        return subdomains.data
    },
    deleteSubdomain : async (id) => {
        const subdomains = await axios.delete(curl+"/"+id+"/delete")
        return subdomains.data
    },

    getFAQsById : async (id) => {
        const faqs = await axios.get(awgurl+"/"+id)
        return faqs.data
    },
    getFAQs: async () => {
        const faqs = await axios.get(awgurl+"/")
        return faqs.data
    },
    createFAQs: async (e) => {
        const faqs = await axios({
            method : 'post',
            url : awgurl+"/create",
            headers : {},
            data : e
        })
        return faqs.data
    },
    updateFAQs: async (id, e) => {
        const faqs = await axios({
            method : 'put',
            url : awgurl+"/"+id+"/update",
            headers : {},
            data : e
        })
        return faqs.data
    },
    deleteFAQs : async (id) => {
        const faqs = await axios.delete(awgurl+"/"+id+"/delete")
        return faqs.data
    },
    

    AWGadminGetSubdomainById : async (id) => {
        const subdomains = await axios.get(awaurl+"/getspecificsubdomain/"+id)
        return subdomains.data
    },
    AWGadminGetSubdomain : async () => {
        const subdomains = await axios.get(awaurl+"/getallsubdomains")
        return subdomains.data
    },
    AWGadminCreateSubdomain: async (e) => {
        const subdomains = await axios({
            method : 'post',
            url : awaurl+"/createsubdomain",
            headers : {},
            data : e
        })
        return subdomains.data
    },
    AWGadminUpdateSubdomain: async (id, e) => {
        const subdomains = await axios({
            method : 'put',
            url : awaurl+"/updatesubdomain/"+id,
            headers : {},
            data : e
        })
        return subdomains.data
    },
    AWGadminDeleteSubdomain : async (id) => {
        const subdomains = await axios.delete(awaurl+"/deletesubdomain/"+id)
        return subdomains.data
    },
    AWGadminUpdateFAQs: async (id, e) => {
        const faqs = await axios({
            method : 'put',
            url : awaurl+"/updatefaq/"+id,
            headers : {},
            data : e
        })
        return faqs.data
    },
    AWGadminGetFAQById : async (id) => {
        const faqs = await axios.get(awaurl+"/getspecificfaq/"+id)
        return faqs.data
    },
    AWGadminGetFAQ : async () => {
        const faqs = await axios.get(awaurl+"/getallfaqs")
        return faqs.data
    },
    AWGadminCreateFAQ : async (e) => {
        const faqs = await axios({
            method : 'post',
            url : awaurl+"/create/faq",
            headers : {},
            data : e
        })
        return faqs.data
    },
    AWGadminDeleteFAQ : async (id) => {
        const faqs = await axios.delete(awaurl+"/deletefaq/"+id)
        return faqs.data
    },
    AWGadminUpdateUser: async (id, e) => {
        const user = await axios({
            method : 'put',
            url : awaurl+"/updateuser/"+id,
            headers : {},
            data : e
        })
        return user.data
    },
    AWGadminDeleteUser : async (id) => {
        const user = await axios.delete(awaurl+"/deleteuser/"+id)
        return user.data
    },
    MUNadminGetFAQById : async (id) => {
        const faqs = await axios.get(aurl+"/getspecificfaq/"+id)
        return faqs.data
    },
    MUNadminGetFAQs : async () => {
        const faqs = await axios.get(aurl+"/getallfaqs")
        return faqs.data
    },
    MUNadminUpdateFAQs: async (id, e) => {
        const faqs = await axios({
            method : 'put',
            url : aurl+"/updatefaq/"+id,
            headers : {},
            data : e
        })
        return faqs.data
    },
    MUNuserGetFAQsById : async (id) => {
        const faq = await axios.get(uurl+"/getspecificfaq/"+id)
        return faq.data
    },
    MUNuserGetFAQs : async () => {
        const faq = await axios.get(uurl+"/getallfaqs")
        return faq.data
    },
    MUNuserUpdateFAQs: async (id, e) => {
        const faqs = await axios({
            method : 'put',
            url : uurl+"/updatefaq/"+id,
            headers : {},
            data : e
        })
        return faqs.data
    }


}
module.exports = functions