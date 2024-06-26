import React from 'react'
import './Weather.css'
import serch_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import sdrizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'





function Weather() {


    let api_key="097e2a7c80d67f7a85919da674ed9cf5";


    const  serch= async ()=>{
        const element=document.getElementsByClassName("cityinput")
        if(element[0]===""){
        return 0
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
        const responce=await fetch(url)
        const data =await responce.json();
        const humidity=document.getElementsByClassName("humidity")
        const wind =document.getElementsByClassName("wind")
        const temp =document.getElementsByClassName("weather-temp")
        const location =document.getElementsByClassName("weather-location")
        humidity[0].innerHTML=data.main.humidity;
        wind[0].innerHTML=data.wind.speed;
        temp[0].innerHTML=data.main.temp;
        console.log(location[1])
        location[1].innerHTML=data.name;

        


    }
    
  return (


    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityinput" />
            <div className='search-icon'>
                <img src={serch_icon} onClick={()=>{serch()}} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24C</div>
        <div className="weather-location">london</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                <div className="humidity">64%</div>
                <div className="text">humidity</div>
                </div>
               
            </div>


            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                <div className="wind">64%</div>
                <div className="text">humidity</div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}



export default Weather

