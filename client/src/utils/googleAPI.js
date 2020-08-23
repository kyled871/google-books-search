import axios from 'axios'
require('dotenv').config()


export default {
    
    // uses Google Books API to search query
    search: function(query) {
        
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
        console.log(apiKey)
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
    }


}