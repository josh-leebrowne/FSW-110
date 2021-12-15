//var order = document.querySelectorAll("button");
//console.log(order);

//function getTotal(e){
//    var price = e.target.getAttribute("data-price");
//    var howMany = e.target.parentElement.children[2].value;
//    var total = parseInt(price) * parseInt(howMany);
//    console.log("Total: " + total);
//}

//order[0].addEventListener("click", getTotal);
//order[1].addEventListener("click", getTotal);
//order[2].addEventListener("click", getTotal);

var input1 = document.getElementById("coffee");
var input2 = document.getElementById("bagel");
var input3 = document.getElementById("biscotti");
var placeOrder = document.getElementById("placeOrder");
var coffeePrice = 4;
var bagelPrice = 5;
var biscottiPrice = 6;
var coffeeTotal;
var bagelTotal;
var biscottiTotal;


placeOrder.addEventListener("click", function (e) {
    e.preventDefault();

    var value1 = parseInt(input1.value);
    console.log(value1);

    if (value1.length < 1) {
        value1 = 0;
        coffeeTotal = 0;
    } else {
        coffeeTotal = coffeePrice * value1;
    }

    var value2 = parseInt(input2.value);

    if (value2.length < 1) {
        value2 = 0;
        bagelTotal = 0;
    } else {
        bagelTotal = bagelPrice * value2;
    }

    var value3 = parseInt(input3.value);

    if (value3.length < 1) {
        value3 = 0;
        biscottiTotal = 0;
    } else {
        biscottiTotal = biscottiPrice * value3;
    }

    var total = coffeeTotal + bagelTotal + biscottiTotal;
    var totalOutput = document.getElementById("totalOutput");
    totalOutput.textContent = total;
    console.log(total);


});






// placeOrder.addEventListener("click", function (e) {
    
//     var value1 = parseInt(input1.value);
//     var value2 = parseInt(input2.value);
//     var value3 = parseInt(input3.value);

//     coffeeTotal = coffeePrice * value1;
//     bagelTotal = bagelPrice * value2;
//     biscottiTotal = biscottiPrice * value3;

//     var total = coffeeTotal + bagelTotal + biscottiTotal;
//     var totalOutput = document.getElementById("totalOutput");
//     totalOutput.textContent = total;
//     console.log(total);

// });

