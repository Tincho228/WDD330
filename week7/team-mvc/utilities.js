  function elementHide(element){
    element.style.display = "none";
  }
  function elementShow(element){
    element.style.display = "block";
  }
  // It adds a touchend event to the elemment selector
  function onTouch(elementSelector, callback) {
  elementSelector.addEventListener('touchend', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      callback()});
}
  function getDate(){
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]  
    var date = months[d.getMonth()] + " " + day[d.getDay()] + " " + d.getDay() + " at " + d.getHours() + ":" + d.getMinutes();
    return date;
    
  }
  export {
      elementHide,
      elementShow,
      onTouch,
      getDate
  }