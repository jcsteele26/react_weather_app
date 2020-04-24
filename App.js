import React from 'react';
import './index.css';
import "moment-timezone"
import { render } from '@testing-library/react';
//import React, { Component } from 'react';


function App() {

  getWeather = () => {
      const zip = document.getElementById("zip").nodeValue;

    // Where we're fetching data from
      fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + 
        ",us&appid=" + process.env.REACT_APP_API_KEY + "&units=imperial")
       
      // We get the API response and receive data in JSON format...
      .then((response) => {
        if (response.status !== 200) {
          console.log("There was a problem. Status Code: " + response.status
          );
        }
      
      // ...then we update the users state
        response.json().then((data) => {
          console.log(data);
          this.setState({
            temperatures: data.main.temp,
            feels_like: data.main.feels_like,
            city: data.name,
            timezone: data,
          });
        });
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() (
      return (
        <div>
          <div>
              <input type="text" placeholder="Enter City Zip Code" id=" " />;
              <button onClick={this.getWeather}></button>;
          </div>
          <span id="temp">{this.state.temp}</span>;
          <span id="feels">{this.state.feels_like}</span>;
          <span id="city">{this.state.city}</span>;
          <h3>{this.state.time}</h3>;
        </div>
      );
  );
}
export default App;
