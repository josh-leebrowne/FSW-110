//var headOne = document.createElement("H1");
//headOne.textContent = "Hello World";
//document.body.appendChild(headOne);

//var newOrderedList = document.createElement('OL');
//newOrderedList.setAttribute("id", "OLJS");
//document.body.appendChild(newOrderedList);

//var helloWorld = document.getElementById("OLJS");
 
//for (var i = 0; headOne < 10; i++);{
//        var listItems = document.createElement("li");
//        listItems.innerHTML = headOne[i];
//        helloWorld.append(listItems);
//
//}

var headOne = document.createElement("H1");
headOne.setAttribute("id", "head")
headOne.style.color = "red"
headOne.textContent = "Hello World";
document.body.appendChild(headOne);

var newOrderedList = document.createElement('OL');
newOrderedList.setAttribute("id", "OLJS");
document.body.appendChild(newOrderedList);

for (var i = 0; i < 10; i++) {
  var listItems = document.createElement("li");
  listItems.innerHTML = headOne.textContent;
  newOrderedList.append(listItems);
}

var names = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily"
]

var namesList = document.getElementById("names");

for (var i = 0; i < names.length; i++){
     var listNames = document.createElement("li");
     listNames.textContent = names[i];
     namesList.append(listNames);
}

//Different Way

for (var i = 0; i <names.length; i++){
    namesList.innerHTML += "<li>" + names[i] + "</li>";
}
