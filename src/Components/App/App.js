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
      ],
      playlistName: 'Best Songs Ever',
      playlistTracks: [
        {
          name: 'Dare You to Move', 
          artist: 'Switchfoot', 
          album: 'Beautiful Letdown', 
          id: 4
        },
        {
          name: 'Beautiful Letdown', 
          artist: 'Switchfoot', 
          album: 'Beautiful Letdown',
          id: 5
        },
        {
          name: 'This Is Your Life', 
          artist: 'Switchfoot', 
          album: 'Beautiful Letdown',
          id: 6
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    let existTracks = this.state.playlistTracks;
    if (existTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 
    existTracks.push(track);
    this.setState({ playlistTracks: existTracks });
  }

  removeTrack(track) {
    let existTracks = this.state.playlistTracks;
    existTracks = existTracks.filter(savedTrack => savedTrack.id !== track.id)
    this.setState({ playlistTracks: existTracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
