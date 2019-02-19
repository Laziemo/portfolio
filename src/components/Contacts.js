import React , { Component } from 'react';
import CONTACTS from '../data/contacts';

const Contact = (props) => {

    const {link,image} = props.contact;
    return (
        <span>              
            <a href={link}>
                <img src = {image} alt='contact' style={{width:50, height: 50, margin: 20}} /> 
            </a>
        </span>
    )

}



const Contacts = () => ( //inline return

    <div>
        <h3> Contact </h3>
        <div>
            {
                CONTACTS.map((each)=>{
                    return (
                        <Contact key={each.id} contact={each} />
                    );
                })
            }
        </div>
    </div>
)


export default Contacts;