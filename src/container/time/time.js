import React, { Component } from 'react'

export default class time extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time:new Date()
        })
        console.log('tick');
    }

    componentDidMount = () => {
        setInterval(() => this.tick(), 1000);
    }
    
    componentDidUpdate = (preprops, prestates) => {
        if(prestates.time !== this.state.time){
            console.log('componentDidUpdate is called')
        }
    }


    componentWillUnmount = () => {
        clearInterval(this.timeId);
    }

  render() {
    return (
      <div>
          <table border='3'>
                {this.state.time.toLocaleTimeString()}
          </table>
      </div>
    )
  }
}
