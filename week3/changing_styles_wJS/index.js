var myHead = document.createElement("H2");
myHead.textContent = "Whatever I Like";
myHead.style.color = "blue";
document.body.appendChild(myHead);

var myList = document.createElement("OL");
myList.setAttribute("id", "MLJS");
document.body.appendChild(myList);

for (var i = 0; i < 5; i++){
    var myItems = document.createElement("li");
    myItems.innerHTML = myHead.textContent;
    myList.append(myItems);
    
}

myList.style.fontSize = "20px"
myList.style.fontWeight = "lighter"
myList.style.fontFamily = "sans-serif"
myList.style.color = "cornflowerblue"

myList.classList.toggle("border")