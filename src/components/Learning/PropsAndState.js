import React, { Component } from 'react';

class PropsAndState extends Component {
    render() {
        return (
            <Alpha />
        )
    }
}

export default PropsAndState;


//Alpha Class 
class Alpha extends Component {
    //State should not be change directly
    state = {
        alphavalue: 'Oh yes, data from Alpha!',
        counter: 1
    }



    clickButton = () => {
        console.log(click);
        console.log(this.state.counter);

        let copyCounter = this.state.counter;
        copyCounter += 1;

        this.setState({
            counter: copyCounter
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickButton}>Wow! A Button </button>
                <Beta fromAlpha={this.state.alphavalue}/>
            </div>
        )
    }
}

class Betat extends Component {
    state = {
        alphaValue: this.props.fromAlpha,
        betaValue: 'This is data from Beta'
    }

    render() {
        return (
            <div>
                <p>This is the Beta Class SHowing Alpha Value <b>{this.props.fromAlpha}</b></p>
                <p>This i sthe Beta Class Showing Value of the Beta State <b>{this.state.betaValue}</b></p>
            </div>
        )
    }
}


//Prop transfer data to a component
//State is where the data leaves in the component