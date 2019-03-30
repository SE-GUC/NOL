const axios = require('axios')
const aurl = "http://localhost:3000/MUN/signin/MUNadmins/"
const uurl = "http://localhost:3000/MUN/signin/MUNusers/"

const functions = {
    
    userGetEvents : async () => {
        const events = await axios.get(uurl+"get")
        return events.data
    },
    userGetEvent : async (id) => {
        const event = await axios.get(uurl+"get/"+id)
        return event.data
    },
    adminGetEvents : async () => {
        const events = await axios.get(aurl+"get/event")
        return events.data
    },
    adminGetEvent : async (id) => {
        const event = await axios.get(aurl+"get/event/"+id)
        return event.data
    },
    createEvent : async (e) => {
        const event = await axios({
            method : 'post',
            url : aurl+"create/event/",
            headers : {},
            data : e
        })
        return event.data
    },
    updateEvent : async (id, e) => {
        const event = await axios({
            method : 'put',
            url : aurl+"update/event/"+id,
            headers : {},
            data : e
        })
        return event.data
    },
    deleteEvent : async (id) => {
        const event = await axios.delete(aurl+"delete/event/"+id)
        return event.data
    }
}
module.exports = functions