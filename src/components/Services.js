import React, { Component } from 'react';

const SERVICES = [
    'database management',
    'authentication systems',
    'payment servers',
    'custom back-end application',
    'custom front-end components',
]

class Service extends Component {
    state = { servicesIndex :  0, fadeIn: true};

    componentDidMount() { //no need to have arrow syntax since this is a natve method to Component
        setTimeout(() =>{
            this.setState({ fadeIn: false })
        }, 1000 );
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.servicesInterval);
        clearTimeout(this.timeout);
    }
    animateTitles = () => {
        this.servicesInterval = setInterval(()=>{
            const serviceIndex = (this.state.servicesIndex + 1) % SERVICES.length;

            this.setState({servicesIndex: serviceIndex, fadeIn: true});

            this.timeout = setTimeout(() =>{
                this.setState({ fadeIn: false })
            }, 1000 );
        }, 2000);
    }

    render() {
        const { fadeIn, servicesIndex} = this.state;
        const service = SERVICES[this.state.servicesIndex];

        return (
            <div>
                <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}><b>{service}</b></p>
            </div>
        )
    }
}


export default Service;