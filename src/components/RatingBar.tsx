import "./css/RatingBarCss.css"
import React, {Component, useState} from 'react';


interface ValueProps {
    ratingNumber: number[];
}

export const RatingBar = (props: ValueProps) => {
    const {ratingNumber} = props;
    const [value, setValue] = useState(0);
    const [valuehover, setValuehover] = useState(0);

    return (
        <div className="container">
            <h3>Rating Bar</h3>
            <div>{value}</div>
            <div className="listbox">
                {
                    ratingNumber.map(item => (
                        <button onClick={() => setValue(item)}
                                className={item < value || item <= valuehover ? "box box-hover" : "box"}
                                onMouseEnter={()=>setValuehover(item)} onMouseLeave={()=>setValuehover(0)}
                        >{item}</button>
                    ))
                }
            </div>
        </div>
    )
}