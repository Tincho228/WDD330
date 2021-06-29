/****************************************/
/*** THIS IS THE UTILITIES MODULE  ******/
/****************************************/

// HELPER FUNCTIONS and more...

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block"
}


// Weather functions

async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            return fetchJson;
        }
    } catch (error) {
        console.log(error);
    }
}

function getDay(unix) {
    var date = new Date(unix *1000);
    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]  
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    // Will display time in 10:30:23 format
    let result = {
        day: day[date.getDay()],
        date: date.getDate()
    }
    return result
}

// Geolocation functions

function error() {
    status.textContent = 'Unable to retrieve your location';
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
}

function getLocation() {
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser')
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
export {
    hide,
    show,
    getJSON,
    getLocation,
    getDay
}
