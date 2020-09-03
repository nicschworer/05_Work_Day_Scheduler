// VARIABLES
var currentDayEl = $("#currentDay");
var mainEl = $(".container");
var userInput = '';
var saveBtn = $("button");

var hours = {
    8: '',
    9: "fuck",
    10: "shit",
    11: '',
    12: '',
    13: '',
    14: '"damn"',
    15: '',
    16: '',
    17: '',
    18: '',
};

var hoursEmpty = {
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
    18: '',
};

var currentHour = moment().hour();
var currentHourSt = currentHour.toString();

// FUNCTIONS
// add current day and date with moments to #currentDay
currentDayEl.html(moment().format('LLLL'));

// localStorage.setItem("hours", JSON.stringify(hours));

//  - function readFromLocalStorage ()
function readFromLocalStorage () {
    hours = JSON.parse(localStorage.getItem("hours"));
    if (hours == undefined) {
        hours = hoursEmpty;
    }
//  use for loop
//  - read value from time property
//  - assign as text back in element (using its class (.description) and id (specific to each hour)
    for (const [key, value] of Object.entries(hours)) {
        var propertyHour =  "#" + `${key}`;
        $(propertyHour).find(".description").html(`${value}`);
//  - check current hour vs time slot (to determine color of text area: gray, red or white)
//  - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
        var hourCompare = parseInt(`${key}`);
        if (hourCompare === currentHour) {
            $(propertyHour).find(".description").addClass("current");
        } else if (hourCompare > currentHour) {
            $(propertyHour).find(".description").addClass("future");
        } else if (hourCompare < currentHourSt) {
            $(propertyHour).find(".description").addClass("past");
        }
    }
};  
//     <!-- this is to look for anything saved previously in local storage -->

readFromLocalStorage();

function saveToLocalStorage() {
    var userInput = $(this).siblings('textarea').val();
    var hourBlockInput = $(this).parent().attr("id");
    console.log(hourBlockInput)
}

//     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
//             - read text from text area (class = "description", should be parent of save button)
//             - read schedule hour
//             - trim text, trim schedule hour
//             - send to local storage
//     call readFromLocalStorage(); 



// add click event to save button class to run function
saveBtn.on("click", saveToLocalStorage);















































































