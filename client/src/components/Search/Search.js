import React, { Component } from 'react'
import './Search.css'
import API from "../../utils/googleAPI"
import { List, ListItem } from '../List/List'

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
            this.setState({
                books: results.data
            })
            console.log(this.state.books)
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

                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                            <ListItem key={book.id}>
                                <h5 className="bookTitle">{book.volumeInfo.title ? book.volumeInfo.title : ""}</h5>
                                <p>by: {book.volumeInfo.authors ? book.volumeInfo.authors : ""}</p>
                                <p>{book.volumeInfo.description ? book.volumeInfo.description : ""}</p>
                                <a href={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""}>
                                <img src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ""} alt={book.volumeInfo.title ? book.volumeInfo.title : ""}></img></a>
                                
                            </ListItem>

                            ))}

                        </List>
                    ) : (
                        <h3>Search for a book to get results!</h3>
                    )}

                </div>
            </div>
        )

    }

}

export default Search