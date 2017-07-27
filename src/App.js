import React, { Component } from 'react';
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
          <FlyNav/>
          <Home/>
        </div>
      )
    }

  
}

export default App;