for (var i = 1; i <= 3; i++) {
  var el = document.getElementById("button" + i);

  el.addEventListener("click" , function(e) {
    console.log("You clicked " + i);
  });
}
