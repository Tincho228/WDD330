async function getJSON() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-34.59476015783852&lon=-68.39071628822137&exclude=minutely,hourly&appid=0bd1671316868f5ad2775ab7ede5bf47');
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            const dt = new Date(fetchJson.daily[0].dt * 1000)
            console.log(fetchJson.daily[0])
            console.log(dt.getDay())
            

        }
    } catch (error) {
        console.log(error);
    }
}
getJSON()