var newHeader = document.createElement('h1');
newHeader.textContent = "Welcome to my JS site.";
document.body.appendChild(newHeader);

var newOrderedList = document.createElement('OL');
newOrderedList.setAttribute("id", "OLJ");
document.body.appendChild(newOrderedList);

var listOne = document.createElement('li');
listOne.textContent = '1';
document.getElementById('OLJ').appendChild(listOne);

var listTwo = document.createElement('li');
listTwo.textContent = '2';
document.getElementById('OLJ').appendChild(listTwo);

var listThree = document.createElement('li');
listThree.textContent = '3';
document.getElementById('OLJ').appendChild(listThree);