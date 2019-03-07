// document.addEventListener("DOMContentLoaded", function(){
//
// });
$(function(){


  var count = document.getElementById("count");
  count.innerHTML = 5;
  count.style.color = "green";
  var $count = $("#count");
  $count.html(5);
  $count.css({"color": "green", "font-size": "40px"});

  var lis = document.getElementsByTagName("li");
  for (var i = 0; i < lis.length; i++) {
    lis[i].classList.add("done");
  }
  var $lis = $("li");
  $lis.addClass("done");

  var done = document.getElementsByClassName("done");
  var $done = $(".done");

  var li = document.createElement("li");
  li.innerHTML = "New Item";
  var list  = document.getElementById("list");
  list.appendChild(li);
  $("#list").prepend($("<li>New Item</li>"));

  var toDoList = ["Food shop", "Wash clothes", "Pay bills"];

  for (var i = 0; i < toDoList.length; i++) {
    console.log(toDoList[i]);
  }

  $(toDoList).each(function(index, item){
    console.log(item);
  });

  var myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function(){
    console.log("I've been clicked!");
  });
  $("#myButton").click(function(){
    console.log("Hello!");
  });
  $("#myButton").on("click", function(){
    console.log($(this).html());
  });




});
