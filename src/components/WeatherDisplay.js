import React from 'react'

const WeatherDisplay=(props)=>{
  const {info}=props

  const styles={
    color: info.temperature > 20 ? "red" :"blue"  
};
return (
        <div>
            <p>Temperature: <span style={styles}>{info.temperature}</span></p>
            <p>Conditions: {info.conditions}</p>
        </div>
    );
};
  
export default WeatherDisplay;
