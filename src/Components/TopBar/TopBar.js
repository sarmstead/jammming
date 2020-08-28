import React from 'react';
import {ReactComponent as StatusIcon} from './jammming_icons_check.svg';
import './TopBar.css';

const iconStyle = {
    width: '0.9rem',
    margin: '0',
    padding: '0'
}

class TopBar extends React.Component {
    render() {
        return (
            <header>
                <StatusIcon style={iconStyle} />
                <span>Connected to Spotify</span>
            </header>
        );
    }
}

export default TopBar;