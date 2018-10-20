import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from './componets/StartPage';
import AppNavBar from './componets/AppNavBar';
import GamePage from './componets/GamePage';
import ResultPage from './componets/ResultPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  state={
    userLocation: "",
    recipientLocation: "",
    message: ""
  }

  render() {
    function updateLocation(text){
      this.setState({ userLocation: text

      });
    }
function updateRLocation(text){
  this.setState({ recipientLocation: text
  });
}

function updateMessage(text){
  this.setState({ message: text
  });
}

    return (
      <div className="main">
    <AppNavBar />
      <BrowserRouter>
        <Switch>
          <Route exact="exact" path="/" render={() => <StartPage userLocation={this.state.userLocation} recipientLocation={this.state.recipientLocation} message={this.state.message} updateLocation={updateLocation.bind(this)} updateRLocation={updateRLocation.bind(this)} updateMessage={updateMessage.bind(this)} />} />
          <Route exact="exact" path="/Game" render={() => <GamePage userLocation={this.state.userLocation} recipientLocation={this.state.recipientLocation} message={this.state.message} />} />
          <Route exact="exact" path="/Results" component={ResultPage} />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
