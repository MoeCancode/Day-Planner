var dateDisplay = document.querySelector("#currentDay");
var date = moment().format("dddd, MMMM Do");

//Display current date on webpage
dateDisplay.textContent = date;


var currentHour = moment().hour();
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


// var savebuttons = document.querySelectorAll(".customButtonStyle");

// for(var x = 0; x < 9; x++) {
//     savebuttons[x].addEventListener("click", function() {
//         var currentButton = savebuttons[x];
//         console.log(currentButton);
//         // var inputArea = savebuttons[x].previousElementSibling;
//         // console.log(inputArea); 
//     })
// }

var saveOne = document.querySelector("#one");
var inputOne = saveOne.previousElementSibling;
//Using setitem we save to local storage
saveOne.addEventListener("click", function(){
    
    var savedText = inputOne.value;
    localStorage.setItem("one", savedText);
})

var saveTwo = document.querySelector("#two");
var inputTwo = saveTwo.previousElementSibling;
saveTwo.addEventListener("click", function(){
    
    var savedText = inputTwo.value;
    localStorage.setItem("one", savedText);
})

// Using getitem we display input text
if(localStorage.getItem && saveOne) {
    inputOne.value = localStorage.getItem("one");
}

else if (localStorage.getItem && saveOne) {
    inputTwo.value = localStorage.getItem("two");
}
