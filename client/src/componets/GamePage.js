import React, { Component} from 'react';

class GamePage extends Component{
  render(){
    return (
      <div>
        <div className="game">
          <h1>{this.props.userLocation}</h1>
          <h1>{this.props.recipientLocation}</h1>
          <h1>{this.props.message}</h1>
        </div>

      </div>
    )
  }
}

export default GamePage;
