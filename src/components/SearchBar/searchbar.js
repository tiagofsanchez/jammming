import React from 'react';
import './searchbar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term:''}
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    handleSearch() {
        console.log('handleSearch');
        this.props.onSearch(this.state.term);
    }

    handleTermChange (e) {
        this.setState({term: e.target.value})
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