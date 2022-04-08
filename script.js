var date = moment().format("dddd, MMMM Do YYYY");
var dateDisplay = document.querySelector("#currentDay");

dateDisplay.textContent = moment().format("dddd, MMMM Do YYYY");

console.log(moment());