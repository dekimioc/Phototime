import React from 'react';
import logo from '../../images/logo-green.png'
import van from '../../images/van.jpg';
import autumn from '../../images/autumn.png';
import * as FontAwesome from 'react-icons/fa/index';
import classes from './section2.css';

const section2 = () => (
    <div className={classes.Section}>
        <div className={classes.icons}>
            <FontAwesome.FaAngleLeft size="30" style={{cursor: "pointer"}} />
            <FontAwesome.FaAngleRight size="30" style={{cursor: "pointer"}} />
        </div>
        <div className={classes.gallery}>
            <div className={classes.text}>
                <img src={logo} alt="logo" />
                <h3>OUR COMUNITY</h3>
                <p>Lorem ipsum delor sit amet, consectuer adipiscing clit</p>
            </div>
            <div>
                <img src={van} alt="van" style={{padding: " 0 20px"}}/>
                <img src={autumn} alt="autumn" />
            </div>
        </div>
    </div>
);

export default section2;
