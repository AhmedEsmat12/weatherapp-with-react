import React from 'react';
import './App.css';
import Weather from './component/weather'
import Form from './component/form'
// const key="09eedc7a8b0d7b6572c3ece41df7e320";
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends React.Component {
  state={
    temparature:"",
    city:"",
    country:"",
    humditity:"",
    description:"",
    error:""
  }
   GetWeather= async(e)=>
  {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`)
    const data=await api.json();
    console.log(data);
    if(city&&country)
    {
    this.setState({
      temparature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humditity:data.main.humidity,
      description:data.weather[0].description,  
      error:""
    })
  }
  else
  {
    this.setState({
      temparature:"",
      city:"",
      country:"",
      humditity:"",
      description:"",
      error:"please enter data"
    }) 
  }
}
  render()
  {
  return (
    <div className="App">
      <Form GetWeather={this.GetWeather} />
   <Weather
   temparature={this.state.temparature}
   city={this.state.city}
   country={this.state.country}
   humditity={this.state.humditity}
   description={this.state.description}
   error={this.state.error}
   />
    </div>
  );
}
}

export default App;
