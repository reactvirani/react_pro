import React, { Component } from 'react'

export default class city extends Component {

    constructor(props) {
        super(props);

        this.state = {
            city: 'surat'
         };
    }
    
    changecountry = () => {
        this.setState ({
            city: 'baroda'
        })   
    }

  render() {
    return (
      <>
            <div>city:{this.state.city}</div>
            <button onClick={() => this.changecountry()}>change</button>

      </>
    )
  }
}
