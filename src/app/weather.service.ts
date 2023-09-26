import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 forcastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
 APIkey = '16e9487f77a9fd027d83bcc54875e34e';
 weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

    constructor(private http: HttpClient) { }

    getCityForcast(city:string){
      return this.http.get(this.forcastURL+city+'&appid='+this.APIkey);
    }

    getCityWeather(city:string){
      return this.http.get(this.weatherURL+city+'&appid='+this.APIkey);
    }

    
  
}
