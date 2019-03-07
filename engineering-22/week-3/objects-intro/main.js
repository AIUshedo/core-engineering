// var person = new Object();
// person.name = "Joe";
// person.age = 26;
// person.employed = true;
// person.friends = ["me", "myself", "I"];
// person.sayHello = function () {
//   console.log("Hello!")
// }
// console.log(person);
//

// this below is how a class is constructed
var Person = function (name, age, employed, friends) {
  this.name = name;
  this.age = age;
  this.employed = employed;
  this.friends = friends;
  this.sayHello = function () {
    console.log("Hi, my name is " + this.name);
  }
}
// this is where the class ends
// var person1 = new Person();
// var person2 = new Person();
// console.log(person1.name);
// console.log(person.name);

var person3 = {
  name: "Joe",
  age: 26,
  employed: true,
  friends:[],
  sayHello: function(){
    console.log("Hi my name is " this.name);
  }
}
