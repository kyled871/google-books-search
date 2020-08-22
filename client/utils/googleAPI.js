require('dotenv').config()
import axios from 'axios'


export default {
    
    // uses Google Books API to search query
    search: function(query) {
        
        const apiKey = process.env.GOOGLE_API_KEY
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
    }


}