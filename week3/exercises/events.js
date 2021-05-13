/* One click event*/
/*
function doSomething(event){
    console.log('Something Happened!');
    console.log("The type of event is " +  event.type);
    console.log("The target is " + event.target);
    console.log("The coordinate X is " + event.screenX + " and the coordinate Y is " + event.screenY);
}
addEventListener('click', doSomething);

/* Mouse events *//*
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );


/* Double click events */
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
    console.log("change");
}

