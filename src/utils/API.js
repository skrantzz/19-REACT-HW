const axios = require('axios');

export default {
    getUsers: ()=> axios.get('https://randomuser.me/api/?results=100&nat=us')
}