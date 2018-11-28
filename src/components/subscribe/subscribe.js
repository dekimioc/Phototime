import React from 'react';
import classes from './subscribe.css';
import * as FontAwesome from 'react-icons/fa/index';

const subscribe = () => (
    <div className={classes.Subscribe}>
        <h1 >Subscribe to us comunity</h1>
        <form style={{padding: "0"}}>
        <div>
            <input type="text" placeholder="Your Email" style={{padding: "10px"}} />
            <button><FontAwesome.FaCheck style={{padding: "10px"}}/></button>
         </div>
        </form>
    </div>
)

export default subscribe;