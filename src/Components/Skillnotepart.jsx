import React from 'react';
const Skillnotepart = (props) => {
    return (
        <>
            <div className="icon_style">
                <i className='fa fa-close' onClick={()=>{
                    props.onSelect(props.id)
                }}/>
                <li><h3>{props.text}</h3></li>
            </div>
        </>
    )
}
export default Skillnotepart;