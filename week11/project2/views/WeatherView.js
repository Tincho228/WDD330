import * as utilitiesModule from "../utilities.js";

export default class WeatherView {
    constructor(elementId) {
        // will need this
        this.parentElement = document.getElementById(elementId)
        this.imgUrlpath = "http://openweathermap.org/img/wn/"
    }
    renderCurrentWeather(parentElement, result, pathIcon) {
        const time = utilitiesModule.getDay(result.current.dt)
        parentElement.innerHTML = `<div class="row weather-sm text-light">
                                        <div class="col-9">
                                            <span>${time.day}, ${time.date}</span>
                                            <h4>Open Weather</h4>
                                            <span>"${result.current.weather[0].description}"</span><br>
                                            <span>Humidity: ${result.current.humidity}% </span><br>
                                            <span>Wind speed: ${result.current.wind_speed}</span><br>
                                        </div>
                                        <!-- Weather broadcast right-->
                                        <div class="col-3">
                                            <img class="img-fluid" src="${pathIcon}" alt="${result.current.weather[0].main}">
                                            <p class="text-warning text-title" style="font-size: 20px;">${result.current.temp}°</p>
                                        </div>
                                    </div>`

    }
    renderWeatherDetail(details, parentElement) {
        const time = utilitiesModule.getDay(details.dt)
        const pathIcon = this.imgUrlpath + details.weather[0].icon + "@2x.png";
        parentElement.innerHTML = ` <h3 class="text-light text-title bg-highlight-green" style="padding-left:15px">Open Weather</h3>
                                    <p class="text-bodycopy text-light" style="padding-left:15px">${time.day} ${time.date}</p>
                                    <div class="col" style="padding:15px">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <img class="img-fluid" src="${pathIcon}" alt="${details.weather[0].main}">
                                            <p class="text-light text-bodycopy" style="font-size:20px">"${details.weather[0].description}"</p>
                                        </div>    
                                        <div class="d-flex flex-wrap justify-content-center text-light text-bodycopy">                                                          
                                            <div class="temp-box">
                                                <div class="temp-box-body">
                                                <p>Day</p>
                                                <p>${details.temp.day}°</p>
                                                </div>
                                            </div>
                                            <div class="temp-box">
                                                <div class="temp-box-body">
                                                <p>Max</p>
                                                <p>${details.temp.max}°</p>
                                                </div>
                                            </div>
                                            <div class="temp-box">
                                                <div class="temp-box-body">
                                                <p>Min</p>
                                                <p>${details.temp.min}°</p>
                                                </div>
                                            </div>
                                        
                                                                                              
                                            <div class="temp-box">
                                                <div class="temp-box-body">
                                                <p>Hum.</p>
                                                <p>${details.humidity}% </p>
                                                </div>
                                            </div>    
                                            <div class="temp-box">
                                                <div class="temp-box-body">
                                                <p>Wind</p>
                                                <p>${details.wind_speed}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Weather broadcast right-->
                                        
                                        
                                    </div>`
    }
}