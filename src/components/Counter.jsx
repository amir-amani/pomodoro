import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Counter.module.css';

// helper functions:
import { fixTime, getTime, start, pause } from '../helpers/functions';

const Counter = ({mode}) => {
    const [time, setTime] = useState({min: 0, sec:0})

    useEffect(() => {
        setTimer();
    }, [mode])


    const setTimer = () => {
        setTime(getTime(mode))
    }
    const startTimer = () => {
        start([time.min , time.sec] , setTime)
    }


    return (
        <div className={styles.container}>
            <p>{fixTime(time.min)}:{fixTime(time.sec)}</p>
            <div className={styles.buttonContainer}>
                <div onClick={startTimer}>Start</div>
                <div onClick={pause}>Pause</div>
                <div onClick={setTimer}>Reset</div>
            </div>
            <div className={styles.modeChangeContainer}>
                <div><Link to={'/work'}>Work</Link></div>
                <div><Link to={'/break'}>Break</Link></div>
                <div><Link to={'/longbreak'}>Long Break</Link></div>
            </div>
        </div>
    );
};

export default Counter;