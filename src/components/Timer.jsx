// this component seems unnessery and can be merged with Counter
// but it looks cleaner this way and im way too lazy to change it

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Counter from './Counter';

const Timer = () => {
    const {name} = useParams();
    const [mode , setMode] = useState("");


    const getThemeFromUrl = (mode) => {
        if(mode === "break") return "#4fb9d3"
        else if(mode === "longbreak") return "green"
        else return "rgb(212, 64, 64)";

    }
    //styles:
    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
    `
    const TimerBody = styled.div`
        transition: all .5s;

        background-color: white;
        color: ${props => props.theme};
        width: 95vw;
        height: 95vh;
        border: 10px solid ${props => props.theme};
        border-radius: 20px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    `


    const navigate = useNavigate();
    useEffect(() => {
        if(name === "work" || name === "break" || name === "longbreak") setMode(() => name);
        else navigate("/work")
    }, [name])

    return (
        <Container>
            <TimerBody theme={getThemeFromUrl(mode)}>
                <Counter mode={mode} />
            </TimerBody>
        </Container>
    );
};

export default Timer;