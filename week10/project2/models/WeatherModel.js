import * as utilitiesModule from "../utilities.js";


export default class Weathermodel {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId)
        this.url = "https://api.openweathermap.org/data/2.5/onecall?lat=-34.61463299186993&lon=-68.34168977379773&exclude=hourly,minutely&units=imperial&appid=0bd1671316868f5ad2775ab7ede5bf47"
        this.imgUrlpath = "http://openweathermap.org/img/wn/"
    }

    
    async filterWeather(circuit) {
        const result = await utilitiesModule.getJSON(this.url)
        for (var i = 0; i < result.daily.length; i++) {
            const time = utilitiesModule.getDay(result.daily[i].dt)
            if (time.day === circuit[0].day) {
                if (time.date === circuit[0].date) {
                    return  result.daily[i] 
                }
            }
        }
    }
}