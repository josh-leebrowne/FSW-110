////////////////////Sunday/////////////////////////////
var buttonSunday = document.getElementById("button-sunday");
var sundayInput = document.getElementById("text-sunday");
var sundayOutput = document.getElementById("out-sunday");
var sundayClear = document.getElementById("clearAll-sunday");

function sundayTD () {
var sundayInput = document.getElementById("text-sunday");
var sundayItems = document.createElement("li");
sundayItems.textContent = (sundayInput.value);
document.getElementById("sunday-unordered").appendChild(sundayItems);
}


buttonSunday.addEventListener("click", sundayTD);

function clearSunday(e) {
    document.getElementById("sunday-unordered").innerHTML = " ";
}

sundayClear.addEventListener("click", clearSunday);

////////////////////Monday/////////////////////////////
var buttonMonday = document.getElementById("button-monday");
var mondayInput = document.getElementById("text-monday");
var mondayOutput = document.getElementById("out-monday");
var mondayClear = document.getElementById("clearAll-monday");

function mondayTD () {
var mondayInput = document.getElementById("text-monday");
var mondayItems = document.createElement("li");
mondayItems.textContent = (mondayInput.value);
document.getElementById("monday-unordered").appendChild(mondayItems);
}


buttonMonday.addEventListener("click", mondayTD);

function clearMonday(e) {
    document.getElementById("monday-unordered").innerHTML = " ";
}

mondayClear.addEventListener("click", clearMonday);

////////////////////Tuesday/////////////////////////////
var buttonTuesday= document.getElementById("button-tuesday");
var tuesdayInput = document.getElementById("text-tuesday");
var tuesdayOutput = document.getElementById("out-tuesday");
var tuesdayClear = document.getElementById("clearAll-tuesday");

function tuesdayTD () {
var tuesdayInput = document.getElementById("text-tuesday");
var tuesdayItems = document.createElement("li");
tuesdayItems.textContent = (tuesdayInput.value);
document.getElementById("tuesday-unordered").appendChild(tuesdayItems);
}


buttonTuesday.addEventListener("click", tuesdayTD);

function clearTuesday(e) {
    document.getElementById("tuesday-unordered").innerHTML = " ";
}

tuesdayClear.addEventListener("click", clearTuesday);

////////////////////Wednesday/////////////////////////////
var buttonWednesday= document.getElementById("button-wednesday");
var wednesdayInput = document.getElementById("text-wednesday");
var wednesdayOutput = document.getElementById("out-wednesday");
var wednesdayClear = document.getElementById("clearAll-wednesday");

function wednesdayTD () {
var wednesdayInput = document.getElementById("text-wednesday");
var wednesdayItems = document.createElement("li");
wednesdayItems.textContent = (wednesdayInput.value);
document.getElementById("wednesday-unordered").appendChild(wednesdayItems);
}


buttonWednesday.addEventListener("click", wednesdayTD);

function clearWednesday(e) {
    document.getElementById("wednesday-unordered").innerHTML = " ";
}

wednesdayClear.addEventListener("click", clearWednesday);

////////////////////Thursday/////////////////////////////
var buttonThursday= document.getElementById("button-thursday");
var thursdayInput = document.getElementById("text-thursday");
var thursdayOutput = document.getElementById("out-thursday");
var thursdayClear = document.getElementById("clearAll-thursday");

function thursdayTD () {
var thursdayInput = document.getElementById("text-thursday");
var thursdayItems = document.createElement("li");
thursdayItems.textContent = (thursdayInput.value);
document.getElementById("thursday-unordered").appendChild(thursdayItems);
}


buttonThursday.addEventListener("click", thursdayTD);

function clearThursday(e) {
    document.getElementById("thursday-unordered").innerHTML = " ";
}

thursdayClear.addEventListener("click", clearThursday);

////////////////////Friday/////////////////////////////
var buttonFriday= document.getElementById("button-friday");
var fridayInput = document.getElementById("text-friday");
var fridayOutput = document.getElementById("out-friday");
var fridayClear = document.getElementById("clearAll-friday");

function fridayTD () {
var fridayInput = document.getElementById("text-friday");
var fridayItems = document.createElement("li");
fridayItems.textContent = (fridayInput.value);
document.getElementById("friday-unordered").appendChild(fridayItems);
}


buttonFriday.addEventListener("click", fridayTD);

function clearFriday(e) {
    document.getElementById("friday-unordered").innerHTML = " ";
}

fridayClear.addEventListener("click", clearFriday);


////////////////////Saturday/////////////////////////////
var buttonSaturday= document.getElementById("button-saturday");
var saturdayInput = document.getElementById("text-saturday");
var saturdayOutput = document.getElementById("out-saturday");
var saturdayClear = document.getElementById("clearAll-saturday");

function saturdayTD () {
var saturdayInput = document.getElementById("text-saturday");
var saturdayItems = document.createElement("li");
saturdayItems.textContent = (saturdayInput.value);
document.getElementById("saturday-unordered").appendChild(saturdayItems);
}


buttonSaturday.addEventListener("click", saturdayTD);

function clearSaturday(e) {
    document.getElementById("saturday-unordered").innerHTML = " ";
}

saturdayClear.addEventListener("click", clearSaturday);