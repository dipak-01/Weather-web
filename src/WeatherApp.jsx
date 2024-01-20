import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import Details from './Details'
import { unsupportedProp } from "@mui/material"
export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city
            :
            "Gwalior",
        clouds
            :
            3,
        country
            :
            "IN",
        description
            :
            "clear sky",
        feels_like
            :
            7.88,
        humidity
            :
            59,
        latitude
            :
            26.2236,
        longitude
            :
            78.1792,
        pressure
            :
            1018,
        temp
            :
            7.88,
        wind
            :
            1.04,
        temp_max: 7.88,
        temp_min: 7.88,
        sea_level: 1018,
        sunrise: new Date().toLocaleTimeString(),
        sunset: new Date().toLocaleTimeString(),

    })
    let updateWeatherInfo = (result) => {
        if (result === undefined) {
            return;
        }
        setWeatherInfo(result)
    }

    return (
        <div>

            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <Details info={weatherInfo} />
        </div>
    )
}