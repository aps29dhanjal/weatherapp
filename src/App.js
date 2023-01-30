
import "./App.css";
import gps from "./assets/materialSymbolsshar.svg";
import mrain from "./assets/carbonmixedRainHai.svg";
import mrain1 from "./assets/carbonmixedRainHai1.svg";
import sunny from "./assets/fluentweatherSunny.svg";
import crain from "./assets/materialSymbolsweat.svg";
import refresh from "./assets/mdirefreshCircle.svg";
import logo from "./assets/mdiweatherSunWirel.svg";
import windy from "./assets/mdiweatherWindy.svg";

import calender from "./assets/simpleLineIconscal.svg";
import { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const[city,setCity]= useState();
  const [location ,setLocation]=useState('delhi');
   useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=f008528010beea33eef7a5d0a30b5a0ef`
    const searchLocation = async()=>{
      const response =await fetch(url);
      const data= await response.json();
      setCity(data);
      console.log(data);

    };
searchLocation();

   },[location])
 return (
      <>
    <div className="nav" >
   <span id="nav1"> <img src={logo} id="logo" alt="" />
      <span id="t1">Weather 1010</span>
    </span> 
    <span className="refresh">
      <img src={refresh}   alt="" onClick={() => window.location.reload(true)} />
      <span>Refresh</span>
    </span>
    </div>
    <div className="box1">
        <input type="search" value={location} id="city" placeholder="Search your city"  onChange={event =>setLocation(event.target.value)} />
        <div className="cityDetails">
          <div className="row">
            <div className="col">
              <img src={gps} alt="" />
              <span id="cityName">{location}</span>
              { city ? city.message==='city not found '? city.message==='Nothing to geocode'?console.log(" "): (<div >{city.city.coord.lat}</div>):console.log(" "):console.log(" ")}
              </div>
          </div>
          <div className="row">       
          </div>
        </div>
    </div>
    <div className="line">
      <hr />
    </div>
    { city ? city.message==='city not found'?(<p>not found</p>): city.message==='Nothing to geocode'?console.log(""):( <div className="box2">
      <div className="labels">
        <label>Date</label>
        <input type="date" name="" id="date" />
        <label>High Temperature</label>
        <label>Low Temperature</label>
        <label>Humidity</label>
        <label>Sunrise Time</label>
        <label>Sunset Time</label>
      </div>
     <div className="scroll">
      <div className="rectangle">
        <span id="date">{window.moment().format("DD-MM-YYYY")}</span>
        <div className="box3">
          <img id= "img0" alt="weather" src={"http://openweathermap.org/img/w/"+ city.list[3].weather[0].icon+".png"} />
          <p >{city.list[3].weather[0].main}</p>
          <p >{city.list[3].main.temp_max}</p>
          <p >{city.list[3].main.temp_min}</p>
          <p >{city.list[3].main.humidity+ "%"}</p>
          <p>{window.moment.utc(city.city.sunrise,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
          <p>{window.moment.utc(city.city.sunset,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
        </div>
      </div>
      <div className="rectangle">
        <span id="date">{window.moment().add(1,'days').format("DD-MM-YYYY")}</span>
        <div className="box3">
          <img id= "img0" alt="weather" src={"http://openweathermap.org/img/w/"+ city.list[10].weather[0].icon+".png"} />
          <p >{city.list[10].weather[0].main}</p>
          <p >{city.list[10].main.temp_max}</p>
          <p >{city.list[10].main.temp_min}</p>
          <p >{city.list[10].main.humidity+ "%"}</p>
          <p>{window.moment.utc(city.city.sunrise,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
          <p>{window.moment.utc(city.city.sunset,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
        </div>
      </div>
      <div className="rectangle">
        <span id="date">{window.moment().add(2,'days').format("DD-MM-YYYY")}</span>
        <div className="box3">
          <img id= "img0" alt="weather" src={"http://openweathermap.org/img/w/"+ city.list[18].weather[0].icon+".png"} />
          <p >{city.list[18].weather[0].main}</p>
          <p >{city.list[18].main.temp_max}</p>
          <p >{city.list[18].main.temp_min}</p>
          <p >{city.list[18].main.humidity+ "%"}</p>
          <p>{window.moment.utc(city.city.sunrise,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
          <p>{window.moment.utc(city.city.sunset,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
        </div>
      </div>
      <div className="rectangle">
        <span id="date">{window.moment().add(3,'days').format("DD-MM-YYYY")}</span>
        <div className="box3">
          <img id= "img0" alt="weather" src={"http://openweathermap.org/img/w/"+ city.list[26].weather[0].icon+".png"} />
          <p >{city.list[26].weather[0].main}</p>
          <p >{city.list[26].main.temp_max}</p>
          <p >{city.list[26].main.temp_min}</p>
          <p >{city.list[26].main.humidity+ "%"}</p>
          <p>{window.moment.utc(city.city.sunrise,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
          <p>{window.moment.utc(city.city.sunset,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
        </div>
      </div>
      <div className="rectangle">
        <span id="date">{window.moment().add(4,'days').format("DD-MM-YYYY")}</span>
        <div className="box3">
          <img id= "img0" alt="weather" src={"http://openweathermap.org/img/w/"+ city.list[33].weather[0].icon+".png"} />
          <p >{city.list[33].weather[0].main}</p>
          <p >{city.list[33].main.temp_max}</p>
          <p >{city.list[33].main.temp_min}</p>
          <p >{city.list[33].main.humidity+ "%"}</p>
          <p>{window.moment.utc(city.city.sunrise,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
          <p>{window.moment.utc(city.city.sunset,'X').add(city.city.timezone,'seconds').format('HH:mm a')}</p>
        </div>
      </div>
    </div>

    </div>): console.log("n")}
   


    </>
  )
  function setData(){
    console.log(city);
    city?console.log("data found"):console.log("no data");
  }
  }
 

export default App
