import React, { Component } from 'react'

export default class country extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: 'india'
         };
        
    }
    
    changecountry = () => {
        this.setState ({
            country: 'Canada'
        })

        
    }


  

  render() {
    return (
      <>
            <div>country:{this.state.country}</div>
            <button onClick={() => this.changecountry()}>change</button>

      </>
    )
  }
}
