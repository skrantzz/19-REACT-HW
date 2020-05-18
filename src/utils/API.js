const axios = require('axios');

export default {
    getUsers: ()=> axios.get('https://randomuser.me/api/?results=100&nat=us'),
    login: (password,name)=> new Promise((res,rej)=> setTimeout(()=> password === "hellokitty" ? res({username: name || "Sydney"}) : rej('Incorrect Password!')))
}