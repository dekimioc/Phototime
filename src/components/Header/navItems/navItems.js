import React from 'react';
import logo from '../../../images/logo.png';
import classes from './navItems.css';

const navItems = () => (
    <div>
        <ul className={classes.ul}>
            <li className={classes.li}>Home</li>
            <li className={classes.li}>Photoapp</li>
            <li><img className={classes.img} src={logo} alt="logo" /></li>
            <li className={classes.li}>Design</li>
            <li className={classes.li}>Download</li>
        </ul>
    </div>
)

export default navItems;