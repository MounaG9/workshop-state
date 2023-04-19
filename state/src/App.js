import React, { Component } from 'react'
import Profile from './Profile';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      fullname: 'Mouna Guezguez',
      bio:'Moon',
      imgSrc:'http://www.maximumwall.com/fonds-decran-bebe-garcon/',
      profession:'Engineer',
      show:false,
      date: new Date()
    }
  }

  show=()=>{
    this.setState({show:!this.state.show})
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });}


  render() {
    return (
      
      <div>
        <h2> its is {this.state.date.toLocaleTimeString()} </h2>
        {this.state.show ? <Profile fullname={this.state.fullname}
         bio={this.state.bio}
          profession={this.state.profession} 
          imgSrc={this.state.imgSrc} /> : null  }
        <button onClick={this.show} >Show me  </button>


      </div>
    )
  }

}