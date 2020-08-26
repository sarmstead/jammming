import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../.util/Spotify';
import Modal from '../Modal/Modal'
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Best Songs Ever',
      playlistTracks: [],
      loggedIn: false
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({ 
        playlistName: 'New Playlist', 
        playlistTracks: [] });
    })
  }

  search(term) {
    Spotify.search(term).then(response => {
      this.setState({ searchResults: response });
    });
  }

  componentDidMount() {
    let loggedInStatus;
    if (document.cookie.includes(true)) {
      loggedInStatus = true;
    } else {
      document.cookie = "loggedIn=false";
      loggedInStatus = false;
    }
    this.setState({ loggedIn: loggedInStatus });
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <div>
          <Modal loggedInStatus={this.state.loggedIn} />
          <Footer />
        </div>
          
      );
    }
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
