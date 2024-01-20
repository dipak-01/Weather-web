import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './App.css'
import logo from './assets/icons8-w-100.png'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ToggleColorMode from './ToggleColorMode';

export default function SearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = `{process.env.REACT_APP_WEATHER_API_KEY}`



    let getWeatherInfo = async () => {

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                feels_like: jsonResponse.main.feels_like,
                longitude: jsonResponse.coord.lon,
                latitude: jsonResponse.coord.lat,
                description: jsonResponse.weather[0].description,
                clouds: jsonResponse.clouds.all,
                wind: jsonResponse.wind.speed,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                sea_level: jsonResponse.main.sea_level,
                sunrise: new Date(jsonResponse.sys.sunrise * 1000).toString().slice(-40, -30),
                sunset: new Date(jsonResponse.sys.sunset * 1000).toString().slice(-40, -30)

            }





            console.log(result.sunset);
            console.log(result.sunrise);
            console.log(result);
            return result;
        } catch (err) {
            setErr(true),
                console.log("error");
        }
    }
    let handleInput = (e) => {
        setCity(e.target.value)
    }
    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setCity("");
            let info = await getWeatherInfo();
            updateWeatherInfo(info);
        }
        catch (err) {
            throw err;
        }

    }


    return (
        <>
            <div className='w-11/12 flex justify-center items-center space-x-16 mx-auto pt-4 pb-8'>
                <div className='  '>
                    <img className=' w-26  h-26 object-cover rounded-full' src={logo} alt="" /></div>
                <div className='w-8/12 flex   justify-center items-center rounded-2xl  '>
                    <div className='w-11/12 '>
                        <form action="" onSubmit={handleSubmit}>
                            <input className=' text-text pl-8 w-full bg-secondary-100 rounded-2xl rounded-e-none h-12  placeholder:italic placeholder:text-text-900 '
                                value={city}
                                onChange={handleInput} id="outlined-basic" placeholder='Search city' label="Outlined" variant="outlined" />
                        </form></div>
                    <div className='m-0 p-0 rounded-2xl rounded-s-none  h-12 bg-primary-100'>
                        <IconButton onClick={handleSubmit} aria-label="delete" size="large">
                            <SearchIcon />
                        </IconButton></div>
<ToggleColorMode/>

                </div>

            </div> {err && <p className='text-red-500 font-semibold text-center'>No such city is recognised by our system</p>}</>
    )
}