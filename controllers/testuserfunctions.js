const axios = require('axios')

const functions  = {

    get : async () => {
        const users = await axios.get("http://localhost:3000/Test");
        return users.data
    },

    patch: async (id) => {
        const edituser = await axios.patch("http://localhost:3000/Test1"+id);
        return edituser.data
    },

    delete : async (id) => {
        const user = await axios.delete("http://localhost:3000"+id);
        return user.data
    }
}
module.exports = functions;