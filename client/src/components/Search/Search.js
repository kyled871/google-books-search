import React from 'react'
import './Search.css'

function Search() {
    return(
        <div className="search">
            <div className="bookSearch form-group row p-5">
                <h5 className="col-12 mb-5">Book Search</h5>
                <input className="form-control col-8 content-center searchBar" placeholder="Search Book Here!"></input>
                <button className="btn btn-primary ml-3">Submit</button>
            </div>


            <div className="results row p-5 mt-5">
                <h5 className="col-12 mb-5">Results</h5>
            </div>
        </div>
    )

}

export default Search