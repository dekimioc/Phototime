import React from 'react';
import NavItems from './navItems/navItems';
import Button from '../button/button';
import * as FontAwesome from 'react-icons/fa';
import classes from './header.css';

const header = () => (
    <div className={classes.Header}>
        <NavItems />
            <h1 className={classes.h1}>Your life, a photo</h1>
            <p>Print your life in a simple photo</p>
        <Button />
        <div style={{color: 'white'}}>
            <FontAwesome.FaTwitter size={30} className={classes.icons}/>
            <FontAwesome.FaFlickr size={30} className={classes.icons}/>
            <FontAwesome.FaDribbble  size={30} className={classes.icons}/>
        </div>
        
    </div>
);

export default header;