document.addEventListener("DOMContentLoaded", function(){
var myButton = document.getElementById("myButton");

function handleClick() {
  console.log("I've been clicked!");

}
myButton.addEventListener("click", function() {
  console.log("I've been clicked!");
});
myButton.addEventListener("click", handleClick);

var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
  console.log("I've been submitted");
  event.preventDefault();
  console.log(event);

});

});
