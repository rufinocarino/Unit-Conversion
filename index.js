let num = 0;
let type = document.getElementById("type");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

function pEnter() {
   num = type.value;
   convertMeters();
   convertVolume();
   convertMass();
}

function convertMeters(){
   let meters = (num * 0.3048).toFixed(2)
   let feet = (num * 3.2808).toFixed(2);
   length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

function convertVolume(){
   let gallons = (num * 0.264172).toFixed(2)
   let liters = (num * 3.785412).toFixed(2)
   volume.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
}

function convertMass(){
   let pounds = (num * 2.2046).toFixed(2)
   let kilos = (num * 0.45359237).toFixed(2)
   mass.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
}

