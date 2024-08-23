
import { useState } from "react"
import axios from "axios"

//Weather app component
function WeathetApp(){


    // const [climate,setClimate]=useState([
    //     { name:"clearsky", imgUrl: "https://unsplash.com/photos/a-group-of-palm-trees-against-a-blue-sky-q01ix4Qyq0c"},
    //     {name: "Mist", imgUrl: "https://unsplash.com/photos/green-leafed-trees-on-mountains-during-fogs-356V-ooP184"},
    //     { name: "Haze", imgUrl: "https://unsplash.com/photos/aerial-photography-of-empty-road-and-trees-during-daytime-7sUNl5aSJPM"}
    // ])

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
            settemp(success.data.main.temp)
        })
    }




    return(

        <div className="bg-[#1E2A5E] p-12 flex justify-center ">

            <div className="bg-white p-8 ">
                <h1 className="text-2xl font-bold">Weather App ⛅</h1>
                <div className=" py-6">
                    <input onChange={handleCity} className="border border-black p-1 w-40 " type="text" placeholder="Search by location" />
                    <button onClick={getWeather} className="bg-[#3f69ff] text-white p-1 m-1 border border-black rounded-sm">Check</button>
                </div>
                
                <div className=" p-6 text-left">
                    <div>
                        <h1 className="font-bold">Weather Report</h1>
                        <p className="py-1">Country : {country}</p>
                        <p className="py-1">Weather : {weather} </p>
                        <p className="py-1">Temp    : {temp} </p>
                        <p className="py-1">Desc    : {desc} </p>

                        <img className="w-36" src="https://unsplash.com/photos/a-group-of-palm-trees-against-a-blue-sky-q01ix4Qyq0c" alt="" />
                    </div>
                    {/* <div>
                        {
                            climate.map(function(item){
                                    if(weather===climate.name){
                                        return (<img className="w-40" src={item.imgUrl} alt="" />)
                                    }
                                
                            })
                        }
                    </div> */}
                    
                </div>
            </div>
        </div>


    )
}

export default WeathetApp