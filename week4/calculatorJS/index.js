//parseInt *changes strings to numbers*

//if (value.length < 1){
//    value = 0
//    applesTotal = 0
//} else {
//    applesTotal = applesPrice * parseInt(value);
//}

//Addition
var additionOne = document.getElementById('add1');
var additionTwo = document.getElementById('add2');
var buttonAddition = document.getElementById('buttonAdd');
var additionOutput = document.getElementById('add-output');

function addition() {
    var x = parseInt(additionOne.value);
    var y = parseInt(additionTwo.value);
    var addAnswer = x + y;
    var addOutput = document.getElementById("add-output");
    addOutput.textContent = addAnswer;
    console.log(addAnswer);
}

buttonAddition.addEventListener("click", addition);

//Subtraction
var subtractionOne = document.getElementById('sub1');
var subtractionTwo = document.getElementById('sub2');
var buttonSubtraction = document.getElementById('buttonSub');
var subtractionOutput = document.getElementById('sub-output');

function subtraction() {
    var x = parseInt(subtractionOne.value);
    var y = parseInt(subtractionTwo.value);
    var subAnswer = x - y;
    var subOutput = document.getElementById("sub-output");
    subOutput.textContent = subAnswer;
    console.log(subAnswer);
}

buttonSubtraction.addEventListener("click", subtraction);

//Multiplication
var multiplicationOne = document.getElementById('mul1');
var multiplicationTwo = document.getElementById('mul2');
var buttonMultiplication = document.getElementById('buttonMul');
var multiplicationOutput = document.getElementById('mul-output');

function multiplication() {
    var x = parseInt(multiplicationOne.value);
    var y = parseInt(multiplicationTwo.value);
    var mulAnswer = x * y;
    var mulOutput = document.getElementById("mul-output");
    mulOutput.textContent = mulAnswer;
    console.log(mulAnswer);
}

buttonMultiplication.addEventListener("click", multiplication);

//Division
var divisionOne = document.getElementById('div1');
var divisionTwo = document.getElementById('div2');
var buttonDivision = document.getElementById('buttonDiv');
var divisionOutput = document.getElementById('div-output');

function division() {
    var x = parseInt(divisionOne.value);
    var y = parseInt(divisionTwo.value);
    var divAnswer = x / y;
    var divOutput = document.getElementById("div-output");
    divOutput.textContent = divAnswer;
    console.log(divAnswer);
}

buttonDivision.addEventListener("click", division);