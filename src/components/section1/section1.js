import React from 'react';
import Button from '../button/button';
import classes from './section1.css';
import hand from '../../images/hand_half_1.png';

const section = () => (
    <div className={classes.Section}>
        <div className={classes.text}>
            <h1 className={classes.header}>Rappresent your life with a simple photo</h1>
            <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut <strong>enim ad minim</strong> veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat</p>
            <Button title="GET STARTED" />
        </div>
        <div className={classes.image}>
            <img src={hand} alt="hand" className={classes.img}/>
        </div>
    </div>
);

export default section;