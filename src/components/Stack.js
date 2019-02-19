/*
Mod P Systems Portfolio

Developed by lm0
*/

import React , { Component } from  'react';
import STACK from '../data/stack.js'


const Stack = (props) => {
    const {image} = props.stack;
    return (
        <span>              
            <img src = {image} alt='contact' style={{width:100, height: 100, margin: 20}} /> 
            
        </span>
    )

}



const Stacks = () => (//inline return

    <div>
        <h3> Tech Stack </h3>
        <div>
            {
                STACK.map((each)=>{
                    return (
                        <Stack key={each.id} stack={each} />
                    );
                })
            }
        </div>
    </div>

)


export default Stacks;