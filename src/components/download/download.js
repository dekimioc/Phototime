import React from 'react';
import logo from '../../images/logo-green.png';
import * as FontAwesome from "react-icons/fa/index";
import classes from './download.css';

const download = () => (
    <div className={classes.Download}>
        <h2 className={classes.header}>Download it</h2>
        <p className={classes.paragr}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidudunt ut labore et dolore magna aliqua.
             uUt enim ad minin vaniam, quis nostud execitation ullamco laboris nisi ut aliquip ex aee commoda consequat</p>
               <div className={classes.buttons}>
                <p style={{display: "inline-block"}}>
                    <span>
                        <input type="button" value="APPLE STORE" className={classes.button} />
                    </span>
                    <span><FontAwesome.FaApple className={classes.icon}/></span>
                </p>
                <p style={{display: "inline-block"}}>
                    <span>
                        <input type="button" value="PLAY STORE" className={classes.button}/>
                    </span>
                    <span><FontAwesome.FaAndroid className={classes.icon}/></span>
                </p>
            </div>
        <div className={classes.bottom}>
            <div>
                <h4>Credits | Privacy | Our Teams</h4>
                <p style={{textTransform: "capitalize"}}>Copyright by phototime - all right reserved</p>
            </div>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />   
            </div>
                
        </div>
    </div>
);
export default download;