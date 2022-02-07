let CELSIUS = document.getElementById("CELSIUS");
let FAHRENHEIT = document.getElementById("FAHRENHEIT");

function CELTOFAR(){
    let output = (parseFloat(CELSIUS.value)*9/5) + 32;
    FAHRENHEIT.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function FARTOCEL(){
    let output = (parseFloat(FAHRENHEIT.value)-32) * 5/9;
    CELSIUS.value = parseFloat(output.toFixed(2));
    console.log(output);
   
}