// VARIABLES
var currentDayEl = $("#currentDay");
var mainEl = $(".container");
var userInput = '';

var hours = {
    nine: "fuck",
    ten: "shit",
    fourteen: "damn",
};

var currentHour = moment().hour();

// FUNCTIONS

currentDayEl.html(moment().format('LLLL'));

localStorage.setItem("hours", JSON.stringify(hours)); //remove

   

// JS
// add current day and date with moments to #currentDay
//     function readFromLocalStorage ()
function readFromLocalStorage () {
    hours = JSON.parse(localStorage.getItem("hours"));
    if (hours == undefined) {
        hours = {};
    } else {
        for (const [key, value] of Object.entries(hours)) {
           var propertyHour =  "#" + `${key}`;
           $(propertyHour).find(".description").html(`${value}`);
           
    }
}  
}
//     <!-- this is to look for anything saved previously in local storage -->
//         use for loop
//             - read value from time property
//             - assign as text back in element (using its class (.description) and id (specific to each hour)
//             - check current hour vs time slot (to determine color of text area: gray, red or white)
//                 - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
readFromLocalStorage();

//     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
//         add click event to save button class to run function
//             - read text from text area (class = "description", should be parent of save button)
//             - read schedule hour
//             - trim text, trim schedule hour
//             - send to local storage
//     call readFromLocalStorage(); 

















































































