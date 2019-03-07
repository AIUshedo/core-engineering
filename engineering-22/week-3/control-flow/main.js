var moneyInMyPocket = prompt("How much money do you have?");
var drinksHadSoFar = prompt("How many drinks have you had?");
var freeCrisps = prompt("Are the crisp free?");
//important line above
if (moneyInMyPocket > 10 && drinksHadSoFar < 3 ) {
  console.log("Another drink, please!");
} else if (moneyInMyPocket >= 5 || freeCrisps == true) {
  //important line above
  console.log("I'll buy some crisps");
}
else {
  console.log("I'm off home.");
}
switch (name) {
  case "bob" :
    console.log('hi, ' + name);
    break;

  case "tim" :
    console.log('hi tim');
    break;

  case "steve" :
    console.log("hi steve");
    break;

  default:
    console.log("hi default person");
}
