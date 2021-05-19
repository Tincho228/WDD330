/* STEP 2 */
$(document).ready(function(){ /* Making sure the page loads before reading variables */ 
let oTurn; 
const x = "x";
const o = "o";

function start(){
const boxElement = $('.box'); /*Selecting all boxes*/ 
Array.from(boxElement).forEach(box => {
    box.addEventListener("touchend", handle, {once:true}); /* Assign a touchend event to every box */
});
}
function handle(e){
    const cell = e.target;
    const currentMark = oTurn ?  o : x ; 
    placemark(cell, currentMark);
    swapTurns();
}
function placemark(cell, currentMark){
    cell.innerHTML = currentMark;
    return;
}
function swapTurns(){
    oTurn = !oTurn;
}
/* Reset function */
$("button").click(function(){
    const boxElement = $('.box');
    Array.from(boxElement).forEach(box => {
        box.textContent = null;
        box.removeEventListener("touchend",handle);
    });
    start();
});
start();
});

