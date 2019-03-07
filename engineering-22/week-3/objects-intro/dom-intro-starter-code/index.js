var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];


function addListItem(value) {
  var addtag = document.createElement("li");
  addtag.innerHTML = value;
  document.getElementById("list").appendChild(addtag);
}

addListItem("text me the digits");
// write append loop here
for (var i = 0; i < listItems.length; i++) {
  addListItem(listItems[i]);
}

var listItemsInDoc = document.getElementsByTagName("li");
for (var i = 0; i < listItemsInDoc.length; i+=2) {
    listItemsInDoc[i].className = "even";
}

var countSpan = document.getElementById("count");
countSpan.innerHTML = listItemsInDoc.length;
}
//for each one make an element and add content to element

// find list by // id

//we append element to list

// write the class loop here
