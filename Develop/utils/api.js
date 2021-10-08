const axios = require('axios');

const api = {
  async getUser(data) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/mt0814
        .get(`https://api.github.com/users/${data.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;