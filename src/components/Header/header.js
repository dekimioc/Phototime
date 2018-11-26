import React from 'react';
import NavItems from './navItems';
import Button from '../Button/Button';
import * as FontAwesome from 'react-icons/fa';

const header = () => (
    <div>
        <NavItems />
        <h1>Your life, a photo</h1>
        <p>Print your life in a simple photo</p>
        <Button />
        <FontAwesome.FaTwitter />
        <FontAwesome.FaFlickr/>
        <FontAwesome.FaDribbble />
    </div>
);

export default header;