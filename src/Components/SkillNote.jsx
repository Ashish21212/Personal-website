import React, { useState } from 'react';
import Skillnotepart from './Skillnotepart';
const SkillNote = () => {
    const [items, setItems] = useState();
    const [nitems, setnItems] = useState([]);
    const pEvent = (event) => {
        setItems(event.target.value)
    }
    const Submit = () => {
        setnItems((oldItems)=>{
          return  [...oldItems,items];
        });
        setItems("");
    }
    const delItems=(id)=>{
        setnItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }
  

    return (
        <>
            <div className="container">
                <div className="incontainer">
                    <h1>Learn Skills</h1>
                    <input type="text" placeholder='Add a language' onChange={pEvent} value={items} />
                    <button onClick={Submit}>+</button>
                    <ul>
                        {nitems.map((itemval,index) => {
                            return (
                                <Skillnotepart
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={delItems}

                                />
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SkillNote;