const axios = require('axios')
require('dotenv').config()


module.exports = {

  findByTitle: function(req, res) {
      console.log(process.env.REACT_APP_API_KEY)
        let query = req.params.title
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`)
        .then(results => {
            res.json(results.data.items)
        })
    }
};
