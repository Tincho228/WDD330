const circuitList = [{
        id:"1",
        name: "Saint Martin Park Loop",
        imgSrc: "./images/park.jpg",
        imgAlt: "Image of Valle Grande",
        distance: "8 miles",
        difficulty: "Easy - Mountain Bike",
        description: "Beautiful short loop along the Saint Martin Park streets",
        directions: "Meeting point: Ballofet Avenue 562",
        date: "8:00 pm",
        teamLeader: "Ryan"
    },
    {
        id:"2",
        name: "Saint Martin Park Loop",
        imgSrc: "./images/park.jpg",
        imgAlt: "Image of Valle Grande",
        distance: "8 miles",
        difficulty: "Easy - Mountain Bike",
        description: "Beautiful short loop along the Saint Martin Park streets",
        directions: "Meeting point: Ballofet Avenue 562",
        date: "8:00 pm",
        teamLeader: "Ryan"
    },
    {
        id:"3",
        name: "Saint Martin Park Loop",
        imgSrc: "./images/park.jpg",
        imgAlt: "Image of Valle Grande",
        distance: "8 miles",
        difficulty: "Easy - Mountain Bike",
        description: "Beautiful short loop along the Saint Martin Park streets",
        directions: "Meeting point: Ballofet Avenue 562",
        date: "8:00 pm",
        teamLeader: "Ryan"
    }
];
export default class CircuitModel {
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    getAllCircuits() {
        // should return a list of all the hikes.
        /*let key = "hikes";
        let existing = JSON.parse(localStorage.getItem(key));
        if (existing) {
            return existing;
        }
        existing = []
        localStorage.setItem(key, JSON.stringify(existing));*/
        return circuitList;
    }
    getCircuitById(id){
        // filter the circuits for the record identified by id and returns it
        return circuitList.filter(circuit => circuit.id === id)
    }
    getComentByName(hikeName) {
        // filter the hikes for the record identified by hikeName and return it
        let key = "hikes"
        let existing = JSON.parse(localStorage.getItem(key));
        if (existing) {
            return existing.filter(comment => comment.name === hikeName)
        }
    }
    writeCommentToLS(data) {
        let key = "hikes"
        let existing = JSON.parse(localStorage.getItem(key))
        if (existing) {
            existing[existing.length] = data;
            localStorage.setItem(key, JSON.stringify(existing));
            return;
        }
        existing = [];
        existing[existing.length] = data;
        localStorage.setItem(key, JSON.stringify(existing));
        return;
    }
}