import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [timer, setTimer] = useState(undefined);
    
    return (
        <div>
            <p>{Math.floor(seconds/3600)}:{Math.floor((seconds%3600)/60)}:{seconds%60}</p>
            <button onClick={() => {
                setTimer(setInterval(() => {
                    setSeconds(oldSeconds => oldSeconds + 1);
                }, 1000));
            }}>Start</button>

            <button onClick={() => {
                clearInterval(timer);
            }}>Stop</button>
        </div>
    );
}

export default Stopwatch;
