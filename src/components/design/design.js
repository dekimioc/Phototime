import React from 'react';
import iphone from '../../images/iphone.jpg';
import Button from '../button/button';
import * as FontAwesome from 'react-icons/fa/index';
import classes from './design.css';

const design = () => (
    <div className={classes.Design}>
        <div clasName={classes.image}>
            <img src={iphone} alt="iphone"/>
        </div>
        <div className={classes.text}>
            <h1 className={classes.header}>Design</h1>
            <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut <strong>enim ad minim</strong> veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat</p>
                <Button className={classes.Button} title="Learn More"/>
                <p style={{fontFamily: "Gotham Rounded Bold"}}>01/05</p>
                <FontAwesome.FaAngleLeft  size="30" style={{cursor: "pointer", margin: " 0 -8px"}} />
                <FontAwesome.FaAngleRight size="30" style={{cursor: "pointer"}} />
        </div>
    </div>
);

export default design;