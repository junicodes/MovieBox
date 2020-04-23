import React from 'react';
import './HeroImage.css';


const HeroImage = (props) => {
    return (
        <div className="rmdb-heroimage"
            style={{
                background: `url('${props.image}'), #1c1c1c`
            }}
        >
            <div className="rmdb-heroimage-content">
                <div className="rmdb-heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}


export default HeroImage;