import React, { Component} from 'react';
 import {Link} from "react-router-dom";

class StartPage extends Component {
render(){

 return(
   <div className="body">
     <div className="discription">
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt risus tellus, nec lacinia magna posuere non. Suspendisse iaculis vehicula dignissim. Proin condimentum velit sit amet velit commodo rutrum. Praesent vestibulum placerat mollis. Maecenas vel ultrices ipsum, a fringilla dui. Sed magna elit, lacinia in ultrices ut, ultricies nec ex. Proin lorem sapien, consequat nec mattis eget, lobortis sit amet libero. Quisque porttitor libero vel est blandit, a commodo mauris accumsan. Pellentesque rutrum magna felis, quis ultrices metus tincidunt efficitur.       </p>
     </div>
     <form>
       <p>Enter your location: </p>
       <input type="text" className="user-location" value={this.props.userLocation} onChange={(e) => this.props.updateLocation(e.target.value)}  />
       <p> Enter your recipient's location: </p>
      <input type="text" className="recipient-location" value={this.props.recipientLocation} onChange={(e) => this.props.updateRLocation(e.target.value)}  />
      <p>Enter your message: </p>
      <input type="text" className="enter-message" value={this.props.message} onChange={(e) => this.props.updateMessage(e.target.value)} />
      <br />
      <Link to="/Game">
        <button type="submit">Deploy Bird</button>
      </Link>
     </form>
   </div>
 )
}
}
export default StartPage;
