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
  export {
      elementHide,
      elementShow,
      onTouch,
  }