import React from 'react';
import logo from './logo.svg';
import './index.css';

function App() {

    const api= {
        key: "",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState(' ');
    const [weather, setWeather] = useState({ });

    const search = evt => {
        if (evt.key === "Enter") {
          fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}');
            then(res => res.json());
            then(result => {setWeather(result); setQuery(' ');});
        }
    }

   

    const dateBuilder = (d) => {
        let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day= days[d.getDay()];
        let date= d.getDate();
        let month= months[d.getMonth()];
        let year= d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
  return (
  
    <div className="app">
        <main>
            <div className="search-box">
                <input type="text" className="search-bar" placeholder="Enter a City Name" />
            </div>

            <div className="location-box">
                <div className="location">Concord, US</div>
                    <div className="date">{dateBuilder(new Date())}</div>
            </div>
        </main>
    </div>
  )
}




export default App;
