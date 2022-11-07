function init(){
//add your javascrip between these two lines of code
function Aclick(){
  var inputentry = document.getElementById('entryinput').value;
  var outputresult = document.getElementById('textoutput');
  outputresult.innerHTML = inputentry;
  alert("Alexander Hu: " + inputentry);
  }
var b = document.getElementById('entrybutton');
b.addEventListener('click', Aclick);
}
window.addEventListener('load', init);