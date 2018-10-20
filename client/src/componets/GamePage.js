import React, { Component} from 'react';
import Iframe from 'react-iframe';

class GamePage extends Component{
  render(){
    return (
      <div>
        <div className="game">
          <h1>{this.props.userLocation}</h1>
          <h1>{this.props.recipientLocation}</h1>
          <h1>{this.props.message}</h1>

          <Iframe url="./floppybird/index.html"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
        </div>


      </div>
    )
  }
}

export default GamePage;
