import React, { Component } from 'react';


class Jokes extends Component {
    state = { joke: {} };

    componentDidMount(){ // place api requests in here since fetch is async (not sure how long it will take) do not want slow fetch to delay rendering
        fetch('https://official-joke-api.appspot.com/random_joke') //returns promise
            .then((response) => {
                return response.json();
            })
            .then((json)=>{
                console.log('json', json);
                this.setState({ joke : json });
            })
            // .then((json)=>{
            //     console.log(json);
            // })
            .catch((err)=>{
                console.error(`Could not fetch joke`, err);
            })

    }

    render(){
        const { setup, punchline } = this.state.joke;
        return (
            <div>
            <p>{setup} <b><em>{punchline}</em></b></p>
            </div>
        )
    }
}

export default Jokes;