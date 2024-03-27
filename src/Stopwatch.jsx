import React, { useState, useEffect,useRef } from 'react'

function Stopwatch(){
const [isRunning, setIsRunning] = useState(false);
const[elapsedTime, setElapsedTime] = useState(0);
const intervalIdRef = useRef(null);
const startTimeRef = useRef(0);

useEffect(() => {
    if(isRunning){
        intervalIdRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        },0);
    }
    return () =>{
        clearInterval(intervalIdRef.current);
    }
},[isRunning])

function Start(){
    setIsRunning(true);
    startTimeRef.current =Date.now() - elapsedTime;
    console.log(startTimeRef.current);
}

function stop(){
    setIsRunning(false);
}

function reset(){
    setElapsedTime(0);
    setIsRunning(false);
}

function formatTime(){
    let hour = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/(1000)%60);
    let milliseconds = Math.floor((elapsedTime%1000)/10);

    return `${minutes}:${seconds}:${milliseconds}`
}

return (
    <div className='stopwatch'>
        <div className="display">{formatTime()} </div>
        <div className="controls">
            <button onClick={Start} className='start-button'>Start</button>
            <button onClick={stop} className='stop-button'>Stop</button>
            <button onClick={reset} className='reset-button'>Reset</button>
        </div>
    </div>
)

}
export default Stopwatch
