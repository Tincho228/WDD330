

/* DOM MANIPULATION HELPER FUNCTIONS*/

// It makes a query of the selector
function qs(selector) { 
    return document.querySelector(selector);
}
function qss(selector) { 
    return document.querySelectorAll(selector);
}
// It adds a touchend event to the elemment selector
function onTouch(elementSelector, callback) {
    elementSelector.addEventListener('touchend', function(evt) {
        evt.preventDefault();
        callback()});
 }

export {
    qs,
    qss,
    onTouch,
}