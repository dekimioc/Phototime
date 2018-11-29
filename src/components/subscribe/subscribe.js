import React from 'react';
import classes from './subscribe.css';
import * as FontAwesome from 'react-icons/fa/index';

const subscribe = () => (
    <div className={classes.Subscribe}>
        <h1 className={classes.header}>Subscribe to us comunity</h1>
        <p className={classes.p}>
            <span>
                <input type="text" placeholder="Your Email" className={classes.input} />
            </span>
           <span><FontAwesome.FaCheck  className={classes.icon}/></span>
        </p>
    </div>
)

export default subscribe;