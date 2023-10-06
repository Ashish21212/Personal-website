import React from 'react';
const Devertical=(props)=>{
    return(
        <>
        <div className="main">
        <div className="vertical">
            <img src={props.imgsrc} alt="me" />
            <div className="cand"><h2>{props.imgtitle}</h2></div>
            <div className="cand-text"><p>{props.imgtext}</p></div>
        </div>
       
        </div>
        </>
    )
}
export default Devertical;