import React from 'react';
import './searchbar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm:''}
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    handleSearch(e) {
        this.props.onSearch(this.state.searchTerm);
        e.preventDefault();
        console.log(this.state.searchTerm);
        
    }

    handleTermChange (e) {
        this.setState({searchTerm: e.target.value})
    }
     
    render () {

        return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
            <a  onClick={this.handleSearch}>SEARCH</a>
        </div>
        )
        }
    }

export default SearchBar;