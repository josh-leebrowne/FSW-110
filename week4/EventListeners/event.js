var box = document.getElementById("div1")

//---Functions---
//Mouse Functions
onload = function() {
    box.style.backgroundColor = "black";
}

function handleMouseOver() {
    box.style.backgroundColor = "green"
    console.log("Mouse Over");
};
function handleMouseOut() {
    box.style.backgroundColor = "black" //NEED HELP
    console.log("Mouse Out");
};

function handleMouseDown() {
    box.style.backgroundColor = "yellow";
    console.log("Mouse Down");
};
function handleMouseUp () {
    box.style.backgroundColor = "blue";
    console.log("Mouse Up")
}

function handleDoubleClick () {
    box.style.backgroundColor = "red";
    console.log("Double Click");
};

function mouseWheel () {
    box.style.backgroundColor = "purple";
    console.log("Scroll");
};
//Keyboard Functions
function keyReset(){
    box.style.backgroundColor = "black";
    console.log("Key Up")
};

function keyRed (){
    if (event.key === 'r')
    box.style.backgroundColor = "red";
};

function keyBlue (){
    if (event.key === 'b')
    box.style.backgroundColor = "blue";
};
function keyPurple (){
    if (event.key === 'p')
    box.style.backgroundColor = "purple";
};
function keyGreen (){
    if (event.key === 'g')
    box.style.backgroundColor = "green";
};
function keyYellow (){
    if (event.key === 'y')
    box.style.backgroundColor = "yellow";
};


//---Event Listeners---
//Mouse Events
box.addEventListener('mouseover', handleMouseOver);
box.removeEventListener('mouseout', handleMouseOut); //NEED HELP

box.addEventListener('mousedown', handleMouseDown);
box.addEventListener('mouseup', handleMouseUp);

box.addEventListener('dblclick', handleDoubleClick);

document.body.addEventListener('wheel', mouseWheel);

//Keyboard Events

document.body.addEventListener('keydown', keyRed)
document.body.addEventListener('keydown', keyBlue)
document.body.addEventListener('keydown', keyPurple)
document.body.addEventListener('keydown', keyGreen)
document.body.addEventListener('keydown', keyYellow)
document.body.addEventListener('keyup', keyReset)


