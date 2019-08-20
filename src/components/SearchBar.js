import React from 'react';
import '../css/ApiData.css'
import '../css/SearchBar.css'

class SearchBar extends React.Component {


    renderGenres = (types) => {
        return (
            types.map((genre) => {
                return (
                    <option>{genre.name}</option>
                )
            })
        )
    }


    render() {

        return (
            <div className="search-bar-container">
                <div className="select-container">
                    <select className="select-item" name="select" onChange={(e) => { this.props.handleFilter(e) }} >
                        {this.renderGenres(this.props.genreTypes)}
                    </select>
                </div>
            </div>
        )
    }

}

export default SearchBar;