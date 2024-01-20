
import "/node_modules/flag-icons/css/flag-icons.min.css";
import wind from '../src/assets/icons8-windy-weather.gif'
import humidity from '../src/assets/icons8-partly-cloudy-day.gif'
import pressure from '../src/assets/icons8-barometer.gif'
import location from '../src/assets/icons8-location-48.png'
import coordinates from '../src/assets/icons8-longitude-48.png'

import Hero from "./Hero";


export default function Details({ info }) {




    let weatherType = () => {
        console.log("inside we type");
        let result;
        if (info.humidity >= 80) {

            result = "r"
        }

        else if (info.temp >= 30) {
            result = "s"
        }
        else if (info.temp <= 10) {
            result = "s"
        }
        else if (info.wind >= 8) {
            result = "w"
        }
        else
            result = "betsuni"

        console.log(result);
        return result;


    }
    let heroImg = Hero(weatherType());


    return (
        <>


            <div className="w-8/12  h-full flex justify-center items-center space-x-16 mx-auto mt-4">
                <div className="basis-1/4   border-black h-96 text-center align-middle p-auto flex flex-col justify-center align-center">
                    <h1 className="text-8xl ">{info.temp}&deg; </h1>
                    <div className="flex mx-2 ">
                        <p className={`text-2xl  fis fi fi-${info.country.toLowerCase()}`}>  </p>
                        <p className=" text-2xl font-semibold p-2 ">{info.country}</p></div>

                </div>
                <div className="basis-1/2   border-black h-96">
                    <img src={heroImg} alt="Weather depiction" />
                </div>
                <div className="basis-1/4   border-black flex justify-center items-center h-96">
                    <div className="grid text-2xl space-y-4  mx-2 ">
                        <div aria-label="wind pressure" className="flex"><img src={wind} alt="loading..." /> &nbsp; {info.wind}</div>
                        <div aria-label="humidity" className="flex"><img src={humidity} alt="loading..." /> &nbsp; {info.humidity}</div>
                        <div  aria-label="pressure" className="flex"><img className="bg-transparent" src={pressure} alt="loading..." /> &nbsp; {info.pressure}</div>

                    </div></div>
            </div>

            <div className="w-8/12 h-60 border-2 text-xl bg-accent-200 grid   grid-rows-2 grid-flow-col gap-4 text-center align-middle py-4  rounded-2xl bg-accent-100     mx-auto mt-20   px-4">
                {/* <div className="basis-1/2  grid h-auto text-center align-middle m-4">
                    <div aria-label="location" className="flex  text-2xl  justify-center items-center space-y-4  mx-2"><img src={location} alt="loading..." />{info.city}</div></div>
                <div className="basis-1/2  flex flex-col justify-center items-center h-60">
                    <div aria-label="location" className="flex text-2xl justify-center items-center space-y-4  mx-2"><img src={coordinates} alt="loading..." />{info.latitude} <br />{info.longitude}</div>
                </div>
                <div className="basis-1/2  flex flex-col justify-center items-center h-60">
                    <p className="text-2xl font-semibold">The weather feels like:</p>
                    <div className="flex text-2xl space-y-4  mx-2">{info.description}</div>
                </div> */}

                <div className=" dark:text-primary  flex justify-center flex-col items-middle    h-24"><p className="text-4xl">{info.temp}&deg;C</p><p>Feels Like :{info.feels_like}&deg;C</p></div>
                <div className=" space-x-4 flex justify-center  items-center  h-24 "><img src="/icons8-sunrise-48.png" alt="img" /><p>Sunrise  <br />{info.sunrise}</p><img src="/icons8-sunset-48.png" alt="img" />   <p>Sunset <br /> {info.sunset}</p></div>
                <div className=" flex justify-center flex-col items-center   h-24 "><p>Max Temp : {info.temp_max}</p><p>Min Temp : {info.temp_min}</p></div>
                <div className="   flex justify-center flex-col items-center   h-24 "> <p>{info.city} <br />{info.description} </p></div>
                <div className="  flex justify-center items-center space-x-4  h-24"> <img src="/icons8-humidity-48.png" alt="img" /><p>{info.humidity} <br /> Humidity</p> <img src="icons8-wind-48.png" alt="" /> <p>{info.wind} <br /> Wind speed</p></div>
                <div className="  flex justify-center items-center space-x-4   h-24 "><img src="/icons8-pressure-48.png" alt="" /><p>{info.pressure} <br /> Pressure</p> <img src="/icons8-high-tide-48.png" alt="" /><p> {info.sea_level} <br /> Sea Level</p></div></div>




            <div className="flex align-middle items-center justify-center h-10 pt-4">
                <div className="w-8/12 flex align-middle justify-center items-center">
                    <h2 className="text-semibold text-xl flex">
                        Made with  &nbsp; <img className=" " src="/icons8-heart-32.png" alt="" /> &nbsp; by&nbsp; <a href="https://github.com/dipak-01"> dk</a>
                    </h2>
                </div>
            </div>


        </>
    )
}