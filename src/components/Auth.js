import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { getMaxListeners } from 'cluster';

const request = require('request');
const sha256 = require('sha256');

export default class Auth extends Component {
    
    constructor (props){
        super (props);

        this.state = {
            email: "",
            username: "",
            password: "",
            password_confirm: "",
            isRegistered: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);

    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const id = target.id;

        this.setState({
            [id]: value
        });
    }

    handleLoginSubmit = (event) =>{
        //console.log('username:', this.state.username, 'password', this.state.password);
        
            this.authenticateExisting(this.state.username, this.state.password);
            
            event.preventDefault();

    }

    handleRegisterSubmit = (event) =>{
        //console.log('username:', this.state.username, 'password', this.state.password);
        if(this.state.password === this.state.password_confirm){
        this.authenticateNew(this.state.email, this.state.username, this.state.password);
        
        event.preventDefault();
        }
        else {
            alert("Passwords do not match!");
        }
    }

    resetState = (event) =>{
        this.setState({
        email: "",
        username: "",
        password: "",
        password_confirm: "",
        });
        
    }

    toggleIsRegistered = () => {
        this.setState({
            isRegistered: !this.state.isRegistered 
        });

    }

    authenticateExisting = (username,password) => {
        const options = {
            method: 'POST',
            url:'http://127.0.0.1:3838/auth_existing',
            headers:
            {
            "Content-Type": 'application/json'
            },
            body: {
                'username': username, 
                'password256': sha256(password)
            },
            json: true
        };
        
        request(options, (error, response, body) => {
            console.log("Successfully sent request!");
            if(error){
                console.error(new Error(error));
                return;
            }
            alert(body.message);
            console.log(body.message);

        });

    }

    authenticateNew = (email,username,password) =>{
    
        console.log("password is correct");

        const options = {
            method: 'POST',
            url:'http://127.0.0.1:3838/auth_new',
            headers:
            {
            "Content-Type": 'application/json'
            },
            body: {
                'email': email,
                'username': username, 
                'password256': sha256(password)
            },
            json: true    
            };

        request(options, (error, response, body) => {
            console.log("Successfully sent request!");
            if(error){
                console.error(new Error(error));
                return;
            }
            alert(body.message);
            console.log(body.message);

        });
    }

    render(){
//use the Form.Group controlId as reference to this.state.username/password -> see handleChange()
        let userauth= this.state.isRegistered ?
        (
            <div className="Auth">
            <Form onSubmit={this.handleLoginSubmit}>
                <Form.Group controlId="username">
                    <Form.Label></Form.Label>
                    <Form.Control type='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} size='lg' />
                    <Form.Text> </Form.Text>
                </Form.Group>

                <Form.Group controlId="password"> 
                    <Form.Label></Form.Label>
                    <Form.Control type='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} size='lg' />
                    <Form.Text> </Form.Text>
                </Form.Group>

                <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox" label="This checkbox does nothing as of now." />
                </Form.Group>

                <Button variant="outline-primary" type="submit" size='lg'>
                    Login
                </Button>
                <hr />
                <Form.Text> Not registered?</Form.Text>
                <br />
                <Button variant="primary" type="submit" onClick={this.resetState, this.toggleIsRegistered}>
                    Sign-up
                </Button>
                <hr />
                
            </Form>
            </div>
        ) : 
        (
            <div className="Auth">
            <Form onSubmit={this.handleRegisterSubmit}>
                <Form.Group controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={this.state.email} onChange={this.handleChange} size='lg' />
                    <Form.Text> </Form.Text>
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label></Form.Label>
                    <Form.Control type='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} size='lg' />
                    <Form.Text> </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label></Form.Label>
                    <Form.Control type='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} size='lg' />
                    <Form.Text> </Form.Text>
                </Form.Group>

                <Form.Group controlId="password_confirm">
                    <Form.Label></Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={this.state.password_confirm} onChange={this.handleChange} size='lg' />
                    <Form.Text> </Form.Text>
                </Form.Group>

                <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox" label="This checkbox does nothing as of now." />
                </Form.Group>

                <Button variant="outline-primary" type="submit" size='lg'>
                    Register
                </Button>
                <hr />
                <Form.Text> Already Registered?</Form.Text>
                <br />
                <Button variant="primary" type="submit" onClick={this.resetState, this.toggleIsRegistered}>
                   Login
                </Button>
                <hr />
                
            </Form>
            </div>
        );

        return (
            <div>
            {userauth}
            </div>
        );
    }
}

