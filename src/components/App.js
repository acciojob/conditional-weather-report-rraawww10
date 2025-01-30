import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const def = {temperature : 0, conditions : "Cool"}

const App = () => {

  const[info, setInfo] = useState(def)


  useEffect(() => {
    setTimeout(() => {
      setInfo({ temperature: 25, conditions: "Sunny" })
    }, 1000)
  })

  return (
    <div>
      <WeatherDisplay info={info} />
    </div>
  )
}

export default App;
