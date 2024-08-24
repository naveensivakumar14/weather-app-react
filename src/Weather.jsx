import React from 'react';
import './index.css';
import { useState } from "react"
import axios from "axios"

//Weather app component
function WeathetApp(){



    //images usestate

    const [climate,setclimate]=useState([
        {name:"Rain", imgUrl:"https://cdn.24.co.za/files/Cms/General/d/8345/b96cf37c77424382844915448d3de4cb.jpg"},
        {name: "Mist", imgUrl: "https://tse3.mm.bing.net/th?id=OIP._583clqkvoA2S9L7zOV_TQHaEX&pid=Api&P=0&h=180"},
        {name: "Clouds", imgUrl: "https://tse4.mm.bing.net/th?id=OIP.kqeKu267OtSq2cD9T17z5QHaE8&pid=Api&P=0&h=180"},
        {name: "Haze", imgUrl: "https://tse2.mm.bing.net/th?id=OIP.9w6pVaByr_fQ00X2hT3YtAHaE8&pid=Api&P=0&h=180"},
        {name: "Clear", imgUrl: "https://w.wallhaven.cc/full/eo/wallhaven-eore1o.jpg"},
        {name: "Drizzle", imgUrl: "https://tse1.mm.bing.net/th?id=OIP.AB-ZTGt6i7QZTNIlrGMXVQHaE6&pid=Api&P=0&h=180"},
        {name: "Thunderstorm", imgUrl: "https://tse1.mm.bing.net/th?id=OIP.5XH0pXr47PW4euUStIb2lwHaEK&pid=Api&P=0&h=180"},
        {name: "Snow", imgUrl: "https://tse2.mm.bing.net/th?id=OIP.0lVGFIDqLl13kADg3HhdVAHaEo&pid=Api&P=0&h=180"}
    ])


    //useState for dynamic elements
    const[city, setmyCity]=useState()

    const[country,setcountry]=useState()
    const[weather, setweather]=useState();
    const[temp,settemp]=useState();
    const[desc,setdesc]=useState();

   

    //handle user location input through onchange
    function handleCity(event){
        setmyCity(event.target.value)
    }

    // to show whether through onclick and  promises
    function getWeather(){
        console.log(city)
        var weatherData =axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f285bf65cb66522508bb4daebe2709c`);

        weatherData.then(function(success){
            setcountry(success.data.sys.country)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            //temperature in celcius
            settemp(Math.floor((success.data.main.temp)-273.15))
        })
    }




    return(

        <div className="bg-[#1E2A5E] p-14 flex justify-center items-center h-screen ">

            <div className="bg-white p-8 border rounded-sm ">
                <h1 className="text-2xl font-bold">Weather App ⛅</h1>
                <div className=" py-6">
                    <input onChange={handleCity} className="border border-black p-1 w-40 " type="text" placeholder="Search by location" />
                    <button onClick={getWeather} weather={weather} className="bg-[#3f69ff] text-white p-1 m-1 border border-black rounded-sm">Check</button>
                </div>
                
                <div className="p-2 text-left flex gap-4 flex-wrap">
                    <div>
                        <h1 className="font-bold">Weather Report</h1>
                        <p className="pt-1 ">Country : {country}</p>
                        <p className="pt-1">Weather : {weather} </p>
                        <p className="pt-1">Temp    : {temp}°C</p>
                        <p className="pt-1">Desc    : {desc} </p>
                    </div>

                {/* appearance to show the related wheather images */}
                   <div className=' w-52 '>
                       {
                        climate.map(function(item){
                            if(item.name==weather){
                                return(
                                    <div key={item.name}>
                                        <img src={item.imgUrl} alt={item.name} />
                                    </div> 
                                )
                            }
                        })
                       }
                   </div>
                </div>
            </div>
        </div>


    )
}

export default WeathetApp