const axios = require('axios');

const BASE_URL = 'https://smart-school-chimaobi-1fc5a20bc992.herokuapp.com';

axios.post(`${BASE_URL}/login`, {
    username: 'Christy',
    password: '12345'
}).then((response) => {
    console.log(response.data);
}).catch((e) => {
    console.error(e);
});