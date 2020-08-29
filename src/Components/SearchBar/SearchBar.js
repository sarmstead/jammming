import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search() {
        if (this.state.term === '') {
            alert('Please enter a song, album, or artist!');
        }

        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleKeyPress(event) {
        if (event.nativeEvent.keyCode === 13 && this.state.term === '') {
            alert('Please enter a song, album, or artist!');
        }

        if (event.nativeEvent.keyCode === 13) {
            this.props.onSearch(this.state.term);

        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyDown={this.handleKeyPress} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;