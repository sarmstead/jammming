import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Dare You to Move', 
          artist: 'Switchfoot', 
          album: 'Beautiful Letdown', 
          id: 1
        },
        {
          name: 'Beautiful Letdown', 
          artist: 'Switchfoot', 
          album: 'Beautiful Letdown',
          id: 2
        },
        {
          name: 'This Is Your Life', 
          artist: 'Switchfoot', 
          album: 'Beautiful Letdown',
          id: 3
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
