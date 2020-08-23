import axios from 'axios'


export default {
    
    // uses Google Books API to search query
    getSearch: function(query) {
        
        return axios.get("/api/google/" + query)
    }


}