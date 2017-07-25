import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';


import FlyNav from './components/presentational/FlyNav';
import Home from './pages/Home'


class App extends Component {
  bookCar(){
      fetch('localhost:3030/booking' , {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: 'book new car for'
          })
      })
    }

    render(){
      return(
        <div>
          <FlyNav />
          <Home/>
        </div>
      )
    }

  
}

export default App;
