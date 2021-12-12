var output = document.getElementById('output');

function keyPress (e) {
    var key = e.key;
    var keyCode = e.keyCode;
    var code = e.code;
    var keyOutput = key + " " + keyCode + " " + code;
    output.textContent = keyOutput;
    console.log(keyOutput);
}

window.addEventListener('keydown', keyPress);






  
 
  