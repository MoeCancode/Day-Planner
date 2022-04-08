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

//Using setitem we save to local storage

//Button One
var saveOne = document.querySelector("#one");
var inputOne = saveOne.previousElementSibling;
saveOne.addEventListener("click", function(){
    
    var savedText = inputOne.value;
    localStorage.setItem("one", savedText);
})


//Button Two
var saveTwo = document.querySelector("#two");
var inputTwo = saveTwo.previousElementSibling;
saveTwo.addEventListener("click", function(){
    
    var savedText = inputTwo.value;
    localStorage.setItem("two", savedText);
})

//Button Three
var saveThree = document.querySelector("#three");
var inputThree = saveThree.previousElementSibling;
saveThree.addEventListener("click", function(){
    
    var savedText = inputThree.value;
    localStorage.setItem("three", savedText);
})

//Button Four
var saveFour = document.querySelector("#four");
var inputFour = saveFour.previousElementSibling;
saveFour.addEventListener("click", function(){
    
    var savedText = inputFour.value;
    localStorage.setItem("Four", savedText);
})

//Button Five
var saveFive = document.querySelector("#five");
var inputFive = saveFive.previousElementSibling;
saveFive.addEventListener("click", function(){
    
    var savedText = inputFive.value;
    localStorage.setItem("five", savedText);
})

//Button Six
var saveSix = document.querySelector("#Six");
var inputSix = saveSix.previousElementSibling;
saveSix.addEventListener("click", function(){
    
    var savedText = inputSix.value;
    localStorage.setItem("Six", savedText);
})

//Button Seven
var saveSeven = document.querySelector("#seven");
var inputSeven = saveSeven.previousElementSibling;
saveSeven.addEventListener("click", function(){
    
    var savedText = inputSeven.value;
    localStorage.setItem("seven", savedText);
})

//Button Eight
var saveEight = document.querySelector("#eight");
var inputEight = saveEight.previousElementSibling;
saveEight.addEventListener("click", function(){
    
    var savedText = inputEight.value;
    localStorage.setItem("Eight", savedText);
})

//Button Nine
var saveNine = document.querySelector("#nine");
var inputNine = saveNine.previousElementSibling;
saveNine.addEventListener("click", function(){
    
    var savedText = inputNine.value;
    localStorage.setItem("nine", savedText);
})

//------------------------------------------------------------------

// Using getitem we display input text
// if(localStorage.getItem && saveOne) {
    inputOne.value = localStorage.getItem("one");
// }

// else if (localStorage.getItem && saveOne) {
    inputTwo.value = localStorage.getItem("two");
// }
