import React from 'react';
import axios from 'axios'
import '../css/ApiData.css'
import '../css/SearchBar.css'

class SearchBar extends React.Component {

    render() {

        return (
            <div className="search-bar-container">
                    <input className="search-bar" id="search" type="text" placeholder="Search by genre" onChange={(e) => {this.props.searchInput(e)}}> 
                    </input>
            </div>
        )
    }

}

export default SearchBar;