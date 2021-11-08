//H1//
var h1One = document.createElement('h1');
h1One.textContent = 'Basic Website Header';
h1One.setAttribute('id', 'h1js');
document.body.appendChild(h1One);

//Paragraph//
var pOne = document.createElement('p');
pOne.textContent = "Here's some text for my JS inserted paragraph.";
pOne.setAttribute('id', 'pjs');
document.body.appendChild(pOne);

//List//
var newOrderedList = document.createElement('OL');
newOrderedList.setAttribute("id", "OLJS");
document.body.appendChild(newOrderedList);

var listOne = document.createElement('li');
listOne.textContent = '1';
document.getElementById('OLJS').appendChild(listOne);

var listTwo = document.createElement('li');
listTwo.textContent = '2';
document.getElementById('OLJS').appendChild(listTwo);

var listThree = document.createElement('li');
listThree.textContent = '3';
document.getElementById('OLJS').appendChild(listThree);

//Footer//
var fOne = document.createElement('footer');
fOne.setAttribute('id', 'f1js');
document.body.appendChild(fOne);

var pTwo = document.createElement('p');
pTwo.textContent = 'Paragraph in footer.';
document.getElementById('f1js').appendChild(pTwo);

//Hyperlink//
var divOne = document.createElement('div');
divOne.setAttribute('id', 'd1js');
document.body.appendChild(divOne);

var aOne = document.createElement('a');
aOne.setAttribute('href', 'https://google.com/');
aOne.textContent = 'Google';
document.getElementById('d1js').appendChild(aOne);



//NavBar//

//Spans


//var spanOne = document.createElement('span');
//spanOne.setAttribute('id', 's1js');
//document.getElementById('s1js').style.display = 'inline-block';
//document.body.appendChild(spanOne);

//var spanTwo = document.createElement('span');
//spanTwo.setAttribute('id', 's2js');
//document.getElementById('s2js').style.display = 'inline-block';
//document.body.appendChild(spanTwo);


//var spanThree = document.createElement('span');
//spanThree.setAttribute('id', 's3js');
//document.body.appendChild(spanThree);

//Links
var navOne = document.createElement('a')
navOne.setAttribute('href', '');
navOne.setAttribute('id', 'navOne')
navOne.textContent = 'Header | ';
document.body.appendChild(navOne);


var navTwo = document.createElement('a');
navTwo.setAttribute('href', '');
navTwo.textContent = 'Body | ';
document.body.appendChild(navTwo);

var navThree = document.createElement('a');
navThree.setAttribute('href', '');
navThree.textContent = 'Footer | ';
document.body.appendChild(navThree);

