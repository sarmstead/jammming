import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            currentYear: ''
        };
    }

    componentDidMount() {
        let loggedInStatus;
        if (document.cookie.includes(true)) {
          loggedInStatus = true;
        } else {
          document.cookie = "loggedIn=false";
          loggedInStatus = false;
        }

        let today = new Date();
        let currentYear = today.getFullYear();

        this.setState({ 
            loggedIn: loggedInStatus,
            currentYear: currentYear 
        });
      }

    render() {
        if (this.state.loggedIn === true) {
            return (
                <footer className="loggedInFooter">
                    <small className="loggedInSmall">Copyright &#169; {this.state.currentYear} <a href="https://sunjayarmstead.com/about" target="_blank" rel="noopener noreferrer">Sunjay Armstead</a> &#38; <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">Codecademy</a>. All rights reserved. <a href="https://sunjayarmstead.com/privacy-policy" target="_blank" rel="noopener noreferrer">Sunjay Armstead privacy policy</a>. <a href="https://www.spotify.com/us/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Spotify privacy policy</a>.</small>
                </footer>
            );

        }
        return (
            <footer>
                <small>Copyright &#169; {this.state.currentYear} <a href="https://sunjayarmstead.com/about" target="_blank" rel="noopener noreferrer">Sunjay Armstead</a> &#38; <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">Codecademy</a>. All rights reserved. <a href="https://sunjayarmstead.com/privacy-policy" target="_blank" rel="noopener noreferrer">Sunjay Armstead privacy policy</a>. <a href="https://www.spotify.com/us/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Spotify privacy policy</a>.</small>
            </footer>
        );
    }
}

export default Footer;