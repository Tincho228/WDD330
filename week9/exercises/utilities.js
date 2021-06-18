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

function pagination(dataCounter, key) {
    let number = dataCounter
    let pagesCounter = 0;
    for (var i = 0; i < dataCounter; i++) {
        if (number > 0) {
            number = number - key
            pagesCounter++
        }
        
    }
    return pagesCounter;
    }
    export {
        getJSON,
        pagination
    }