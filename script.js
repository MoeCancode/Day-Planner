var dateDisplay = document.querySelector("#currentDay");
var date = moment().format("dddd, MMMM Do");

//Display current date on webpage
dateDisplay.textContent = date;


var currentHour = moment().hour();
console.log(currentHour);
var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// var workingHours = [16,17,18,19,20,21,22,23,24];
var containerbox = document.querySelector(".container");
//Function to style timeboxes according to current time
//Function is called every second and it updates the stling accordingly

var keepChecking = setInterval(function() {
    for(var i = 0; i < workingHours.length; i++)
    {
        if(currentHour === workingHours[i]) {
            //Styling for present
            containerbox.children[i].style.backgroundColor = "rgb(236, 106, 128)"; 
            containerbox.children[i].classList.add("mb-3");
            containerbox.children[i].classList.add("mt-3");
        }
        else if(currentHour > workingHours[i]) {
            //Styling for past
            containerbox.children[i].style.backgroundColor = "rgb(218, 216, 216)";
        }
        else if(currentHour < workingHours[i]) {
            // Styling for future
            containerbox.children[i].style.backgroundColor = "#45cb45";
        }
    }


}, 1000)