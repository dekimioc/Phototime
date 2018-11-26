import React from 'react';
import logo from '../../images/logo.png';

const navItems = () => (
    <div>
        <ul>
            <li>Home</li>
            <li>Photoapp</li>
            <img src={logo} alt="logo" />
            <li>Design</li>
            <li>Download</li>
        </ul>
    </div>
)

export default navItems;