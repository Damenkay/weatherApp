import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { faFilm,faCloud, faThermometerEmpty, faWater, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit{
  weatherData:any;
  WeatherService: any;
  location:any;
  isFahrenheit = false;
  isCelsius = true;
  displayError:any;
  ifError = false;
  forcastData: any;
  apiIcon:any;
  iconLInk: string | undefined;
  
  // Angular Icons 
  filmIcon = faFilm;
  cloudIcon = faCloud
  thermoIcon = faThermometerEmpty
  humidityIcon = faWater
  pressureIcon = faArrowCircleDown
  

  constructor(private weatherService:WeatherService){

  }
  ngOnInit(){
    this.getJsonData();
  }
    getJsonData(){
      const storedData = localStorage.getItem('weatherData')
      const sstoredData = localStorage.getItem('forcastData')
    if (storedData) {
      const apiData = JSON.parse(storedData)
      console.log('data from local storage:', apiData);
      this.weatherData = apiData;
      this.apiIcon =this.weatherData.weather[0].icon
         console.log(this.apiIcon);
      this.iconLInk = "http://openweathermap.org/img/w/"+this.apiIcon+".png"
         console.log(this.iconLInk);
      const apiForcastData = JSON.parse(storedData)
      this.forcastData = apiForcastData
      console.log('ForcastData data from local storage:', apiForcastData);

    } else{
      console.log('No data from local storage');
    }
    }

    onCelsius(){
      this.isCelsius = true;
      this.isFahrenheit = false;
      
     }

    onFahrenheit(){
      this.isFahrenheit = true;
      this.isCelsius = false;
     }

     getWeather(){
      this.weatherService.getCityWeather(this.location).subscribe((res) => {
        this.weatherData = res;
        console.log(res)}, error=>{
          console.log(error);
          this.displayError = error;
          this.ifError = true;
        });
         this.apiIcon =this.weatherData.weather[0].icon
         this.iconLInk = "http://openweathermap.org/img/w/"+this.apiIcon+".png"
         
    }

    closeWeather(){
      this.weatherData = null;
    }
}