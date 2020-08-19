import React from 'react';
import './Modal.css';
import Spotify from '../../.util/Spotify';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
        
    }

    getAccessToken() {
        Spotify.getAccessToken();
    }

    render() {
        if (this.props.loggedInStatus === true) {
            return null;
        }
        return (
            <section className="modal">
                <h1>Welcome!</h1>
                <p>First things first ... let's get you connected to Spotify.</p>
                <button onClick={this.getAccessToken}>Connect</button>
            </section>
        );
    }
}

export default Modal;