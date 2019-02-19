/*
Mod P Systems Portfolio

Developed by lm0
*/

import React , { Component } from  'react';
import {Button} from 'react-bootstrap';
import Projects from './Projects.js';
import Contacts from './Contacts.js';
import Stack from './Stack.js';
import Services from './Services.js';
import Jokes from './Jokes.js';

import profile from '../assets/zim.png';

class Home extends Component  {

    state = { displayBio : false };
    // constructor () {
    //     super();
    //     this.state = {displayBio: false};

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //     //gives toggleDisplayBio 'this' access
    //     //this is not reqired if we use class property and initializer syntax

    // }

    toggleDisplayBio = () => {
        this.setState( {displayBio: !this.state.displayBio });
    }


    render() {
        let bio = this.state.displayBio? 
        (
            <div>
                <p> Gita Labs was founded in 2018 by Vishal Menon, in an effort to develop strong core modules for web application stacks.</p>
                <p> Modules include: </p>
                <Services /> 
                <p> Take a tour of this website to see the modules in action.</p>
                <button onClick={this.toggleDisplayBio}> Show Less</button>
            </div>
        )   :   <Button onClick={this.toggleDisplayBio}> Read More</Button>

        return (
            <div>
                <hr />
                <img src={profile} alt='profile' style={{width:'200px', height: '200px', borderRadius:100}} />

                <h1><b>Gita Labs</b></h1>
                <h3><b>Music inspired technology.</b></h3>
                <p> Gita Labs is an open source software vendor providing modular full stack web development services.</p>
                {bio}
                            
                <hr />
                <Projects />
                <hr />
                <Jokes />
                <hr />
                <Stack />
                <hr />
                <Contacts />
                <hr />
                <hr />
            </div>


        )
    }
 
}


export default Home;
