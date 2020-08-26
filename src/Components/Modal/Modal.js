import React from 'react';
import './Modal.css';
import Spotify from '../../.util/Spotify';

class Modal extends React.Component {
    getAccessToken() {
        Spotify.getAccessToken();
    }

    render() {
        if (this.props.loggedInStatus === true) {
            return null;
        }
        return (
            <main>
                <img src="./jammming_purple.svg" class="logo" alt="Jamming purple logo" />
                <p>Welcome to your interactive Spotify companion.</p> 
                <p class="emphasis">Connect Jammming to your Spotify account to get started.</p>
                <button onClick={this.getAccessToken}>Connect to Spotify</button>
            </main>
        );
    }
}

export default Modal;