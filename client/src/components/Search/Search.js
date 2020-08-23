import React, { Component } from 'react'
import './Search.css'
import API from "../../utils/googleAPI"

class Search extends Component {

    

    state = {
        books: [],
        query: "",
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    }

    componentDidMount() {
        // 
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

        API.getSearch(this.state.query)
        .then(results => {
            console.log(results.data)
        })

    }


    render() {

        return(
            <div className="search">
                <div className="bookSearch form-group row p-5">
                    <h5 className="col-12 mb-5">Book Search</h5>
                    <input className="form-control col-8 content-center searchBar" name="query" onChange={this.handleInputChange} value={this.state.query} placeholder="Search Book Here!"></input>
                    <button className="btn btn-primary ml-3" onClick={this.handleFormSubmit}>Submit</button>
                </div>
    
    
                <div className="results row p-5 mt-5">
                    <h5 className="col-12 mb-5">Results</h5>
                </div>
            </div>
        )

    }

}

export default Search