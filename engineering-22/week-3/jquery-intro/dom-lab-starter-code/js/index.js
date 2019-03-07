$(function() {
  Math.floor(Math.random() * 6) + 1;

  var $dotInInner = $(".innerSquare");
  $($dotInInner).addClass("dot");

  var array = [1, 2, 3];

  $(array).each(function(index, number){
    console.log(number);
  });

});




//Manipulate those elements so that they will or won't
//show a black dot depending on the random number.
//
