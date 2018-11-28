import React from 'react';
import Button from '../button/button';
import logo from '../../images/logo-green.png';

const download = () => (
    <div>
        <h2>Download it</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidudunt ut labore et dolore magna aliqua.
             uUt enim ad minin vaniam, quis nostud execitation ullamco laboris nisi ut aliquip ex aee commoda consequat</p>
        <Button title="APPLE STORE"/>
        <Button title="PLAY STORE" />
        <div>
            <div>
                <h4>Credits | Privacy | Our Teams</h4>
                <p>Copyright by phototime - all right reserved</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </div>
);
export default download;