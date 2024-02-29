import axios from 'axios'
import React, {useState} from 'react'
import './App.css';

function App() {
  const [data,setData]=useState([])
  const [location,setLocation]=useState('Pune')
  

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f79f16fe1ddc8b3724dd944a2bbc8e55` 

  const searchLocation=(event)=>{
    setLocation(event.target.value)
  }

  const fetchApi=()=>{
    axios.get(url).then((res)=>{
      setData(res.data)
      setLocation('')
    })
  }


  
  return (
    <div className="app">
      
      <div className="search">
        <input
        type='text'
        value={location}
        onChange={(event)=>searchLocation(event)}
        placeholder='Enter Location'
        
        />
        {location !== '' ?(<button className='btn-primary' onClick={()=>fetchApi()}>Search</button>):null}
        

      </div>
      <div className="container">



        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main?(<h1>{data.main.temp.toFixed()}°F</h1>):null}
          
          </div>
          <div className="description">
          {data.weather?(<p>{data.weather[0].main}</p>):null}
          
          </div>
        </div>


        {data.name !== undefined &&  
        <div className="bottom">
        <div className="feels">
        {data.main?(<p className='bold'>{data.main.feels_like.toFixed()}°F</p>):null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main?(<p className='bold'>{data.main.humidity}%</p>):null}
    
          <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind?(<p className='bold'>{data.wind.speed.toFixed()}MPH</p>):null}
         
          <p>Wind Speed</p>
        </div>
      </div>
        
        }

        


      </div>
     
    </div>
  );
}

export default App;
