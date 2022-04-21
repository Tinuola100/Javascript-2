// for alert
   function lifeInWeeks(age) {
   var days = (90 - age) * 356;
   var weeks = (90 - age) * 52;
   var months = (90 - age) * 12;
   var output1 = ("You have" + " " + days + " days, " + weeks + " weeks and " + months + " months left ");
   alert(output1)
   }
  lifeInWeeks (age=prompt("Enter your age"));
 

// for console.log
function lifeInWeeks(age) {
var days = (90 - age) * 356;
var weeks = (90 - age) * 52;
var months = (90 - age) * 12;
console.log("You have" + " " + days + " days, " + weeks + " weeks and " + months + " months left ");
}

lifeInWeeks(28);
