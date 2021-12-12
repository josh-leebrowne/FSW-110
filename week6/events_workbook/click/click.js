var box = document.getElementById("red-box")

function handleDisappear () {
    box.style.display ="none";
}

box.addEventListener("click", handleDisappear);