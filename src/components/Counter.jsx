import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();
    const handleModeClick = (event) => {
        const mode = event.target.innerText;
        switch (mode) {
            case "Work":
                navigate("/mode");
                break;
            case "Long Break":
                navigate("/longbreak");
                break;
            case "Break":
                navigate("/break");
                break;
            default:
                navigate("/work");
                break;
        }
    }


    return (
        <div className={styles.container}>
            <p className={styles.timerContainer}>{fixTime(time.min)}:{fixTime(time.sec)}</p>
            <div className={styles.buttonContainer}>
                <div onClick={pause}>Pause</div>
                <div onClick={startTimer}>Start</div>
                <div onClick={setTimer}>Reset</div>
            </div>

            {/*i didnt use <Link/> because its a pain in the ass to style it*/}
            <div className={styles.modeChangeContainer} onClick={(event) => handleModeClick(event)}>
                <div className={styles.modeButton}>Break</div>
                <div className={styles.modeButton}>Long Break</div>
                <div className={styles.modeButton}>Work</div>
            </div>
        </div>
    );
};

export default Counter;