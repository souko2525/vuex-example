const axios = require('axios')

export const ItemsAPI = {
  getAllUnchecked (callback) {
    axios.get('/static/json/users.json')
    // axios.get('../assets/json/users.json')
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
