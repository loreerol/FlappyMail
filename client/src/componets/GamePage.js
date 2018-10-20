import React, { Component} from 'react';
import Iframe from 'react-iframe';

class GamePage extends Component{
    componentDidMount() {
        console.log(this.props.message);

        var game = document.getElementById('game');
        console.log(game);
        console.log(game.contentWindow);
        console.log(game.contentDocument);
        console.log(game.contentWindow.document);        
        var msg = game.contentWindow.document.getElementById('txtmessage');
        console.log(msg);
        
    }
    
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
        id="game"
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
