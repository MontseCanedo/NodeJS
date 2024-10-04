const axios = require('axios');

const httpClientPlugin = {
    
    get: async(url) => {
        
    // axios

    const { data } = await axios.get( url );
    return data;

    // http
    //const resp = await fetch( url );
    //return await resp.json();
    },

    // post: async(url, body) => {},
    // puºt: async(url, body) => {},
    // delete: async(url) => {},
};

module.exports = {
    http: httpClientPlugin,
}