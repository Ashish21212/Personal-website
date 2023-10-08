import React, { useState } from 'react';

const Time=()=>{
    
    const state=useState();
    const[curTime,Utime]=useState(new Date().toLocaleTimeString());
    const UpdatedTime=()=>{
Utime(new Date().toLocaleTimeString());

    }
    setInterval(UpdatedTime,1000);
    return(
        <>
        <div className="Clock">
        <h2>{curTime}</h2>
        <button onClick={UpdatedTime}>Get Updated Time</button>
        </div>
        </>
    )
}
export default Time;