var submitForm = document.getElementById("submit-me");
var inputName = document.getElementById("name");
var inputAge = document.getElementById("age");
var output = document.getElementById("output");


function submitButton (e) {
    e.preventDefault();
    output.textContent = "First Name: " + inputName.value + " " + "Age: " + inputAge.value;
}

submitForm.addEventListener("submit", submitButton);
