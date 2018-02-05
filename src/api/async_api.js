const axios = require('axios')

export const ItemsAPI = {
  getAllUnchecked (callback) {
    axios.get('/static/json/users.json')
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        callback(error)
      })
  }
}
