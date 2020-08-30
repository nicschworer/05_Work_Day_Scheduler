// VARIABLES
var currentDayEl = $("#currentDay");
var mainEl = $(".container");
var userInput = '';

var hours = {
    "eight": '',
    "nine": '',
    "ten": '',
    "eleven": '',
    "twelve": '',
    "thirteen": '',
    "fourteen": '',
    "fifteen": '',
    "sixteen": '',
    "seventeen": '',
    "eighteen": '',
};

var currentHour = moment().hour();

// FUNCTIONS

currentDayEl.html(moment().format('LLLL'));

// assign .past .present or .future to description divs based on currentHour

// check local storage for content
    // if no content, assign empty array
    // if content, display in corresponding description divs

// add event listener to save button
    userInput = event.target.parent.description.textcontent
    user




// PSEUDO CODE Homework 5 (calendar)
// HTML
// create time blocks for each hour from 9am to 5pm in HTML
//     create div container for each hour time slot 
//         create text of div to show the relevant hour slot (9-17 (24 hour clock))
//         create text area where the events of the hour are typed by user
//             include class designation from CSS (.description)
//             include specific ID for each hour
//         create save button
//             include a class for all save buttons (.saveBtn)
// ----------------------------------------------------------------------------------------
// JS
// add current day and date with moments to #currentDay
//     function readFromLocalStorage ()
//     <!-- this is to look for anything saved previously in local storage -->
//         use for loop
//             - read value from time property
//             - assign as text back in element (using its class (.description) and id (specific to each hour)
//             - check current hour vs time slot (to determine color of text area: gray, red or white)
//                 - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
//     function writeToLocalStorage ()
//     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
//         add click event to save button class to run function
//             - read text from text area (class = "description", should be parent of save button)
//             - read schedule hour
//             - trim text, trim schedule hour
//             - send to local storage
//     call readFromLocalStorage(); 

















































































