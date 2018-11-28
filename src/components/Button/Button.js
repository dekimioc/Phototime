import React from 'react';
import classes from './button.css';

const button = (props) => (
    <div>
        <button className={classes.button}>{props.title}</button>
    </div>
);

export default button;