const circuitList = [{
        id:"1",
        name: "Saint Martin Park Loop",
        imgSrc: "./images/park.jpg",
        imgAlt: "Image of Valle Grande",
        distance: "8 miles",
        difficulty: "Easy - Mountain Bike",
        description: "Beautiful short loop along the Saint Martin Park streets",
        directions: "Meeting point: Ballofet Avenue 562",
        day: "Thursday",
        date: 15,
        hour: "8:00 pm",
        map: '<iframe class="embed-responsive embed-responsive-16by9" src="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d8116.49791940418!2d-68.35692374641414!3d-34.61292178486631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e1!4m3!3m2!1d-34.610701899999995!2d-68.34667859999999!4m3!3m2!1d-34.6162117!2d-68.35757079999999!4m3!3m2!1d-34.6172213!2d-68.35477569999999!4m3!3m2!1d-34.6106082!2d-68.3467933!5e0!3m2!1sen!2sar!4v1624470685946!5m2!1sen!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
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
        day: "Friday",
        date: 16,
        hour: "5:00 pm",
        map: '<iframe class="embed-responsive embed-responsive-16by9" src="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d65567.1607528891!2d-68.47232422797332!3d-34.603993802191404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e1!4m3!3m2!1d-34.574897!2d-68.4723242!4m3!3m2!1d-34.6071674!2d-68.3560095!4m3!3m2!1d-34.6297316!2d-68.3832139!4m3!3m2!1d-34.5752497!2d-68.4729669!5e0!3m2!1sen!2sar!4v1624475523856!5m2!1sen!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
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
        day:"Saturday",
        date: 17,
        hour: "10:00 pm",
        map: '<iframe class="embed-responsive embed-responsive-16by9" src="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d65567.1607528891!2d-68.47232422797332!3d-34.603993802191404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e1!4m3!3m2!1d-34.574897!2d-68.4723242!4m3!3m2!1d-34.6071674!2d-68.3560095!4m3!3m2!1d-34.6297316!2d-68.3832139!4m3!3m2!1d-34.5752497!2d-68.4729669!5e0!3m2!1sen!2sar!4v1624475523856!5m2!1sen!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
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