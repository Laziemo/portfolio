import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 3,
        marginTop: 1
    };

    const style_auth = {
        float: 'right'
    }


    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}>|</h3>
                <h3 style={style}><Link to='/db'>Legends DB</Link></h3>
                <h3 style={style}>|</h3>
                <h3 style={style}><Link to='/crypto'>Crypto</Link></h3>
                <h3 style={style_auth}><Link to='/auth'>Auth</Link></h3> 
            </div>
            {props.children}
        </div>
    )
    
}

export default Header;