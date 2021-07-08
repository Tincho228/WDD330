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
function clearInput(element){
    element.value = ""
}
function renderHeroCircuit(parentElement){
    parentElement.innerHTML = `<div class="hero bg-image-home">
                                <div class="jumbotron-fluid">
                                    <div class="container">
                                        <h1 class="display-3 text-light text-title" style="padding-top:20px;">Choose your team!!!</h1>
                                        <p class="lead text-light text-bodycopy">Check all of our loops and circuits - Just for
                                        you..</p>
                                        <hr class="my-2 text-light">
                                        <p class="text-light text-bodycopy">More info</p>
                                        <p class="lead">
                                            <a class="btn btn-sm bg-highlight-green btn-lg text-light" style="margin-bottom:30px"
                                            href="#" role="button">Jumbo
                                            action name</a>
                                        </p>
                                    </div>
                                </div>
                            </div>`
}
function renderHeroAcoount(parentElement){
    parentElement.innerHTML =`<div class="hero bg-image-account">
    <div class="jumbotron-fluid">
      <div class="container">
        <h1 class="text-light text-title" style="padding-top:20px;">Welcome Admin!!!</h1>
        <p class="lead text-light text-bodycopy">Create, Edit and Delete your Loops...</p>
        <hr class="my-2 text-light">
        
      </div>
    </div>
  </div>`
}
export {
    hide,
    show,
    getJSON,
    getLocation,
    getDay,
    clearInput,
    renderHeroAcoount,
    renderHeroCircuit
}
