

export default class WeatherView {
    constructor(elementId) {
        // will need this
        this.parentElement = document.getElementById(elementId)
        this.imgUrlpath = "http://openweathermap.org/img/wn/"
    }
    renderCurrentWeather(parentElement, result, pathIcon) {
        parentElement.innerHTML = `<div class="col-9">
                                        <span>June, 5</span>
                                        <h4>Open Weather</h4>
                                        <span>"${result.current.weather[0].description}"</span><br>
                                        <span>Humidity: ${result.current.humidity}% </span><br>
                                        <span>Wind speed: ${result.current.wind_speed}</span><br>
                                        
                                    </div>
                                    <!-- Weather broadcast right-->
                                    <div class="col-3">
                                        <img class="img-fluid" src="${pathIcon}" alt="${result.current.weather[0].main}">
                                        <p class="text-warning text-title" style="font-size: 20px;">${result.current.temp}°</p>
                                    </div>`
    }
    renderWeatherDetail(details, parentElement){
        console.log(this.parentElement)
        /*
        const pathIcon = this.imgUrlpath + details.weather[0].icon+ "@2x.png";
        parentElement.innerHTML = "details"
        */
    }
}