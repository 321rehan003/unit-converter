let ans;

// Meters to Feet

const meterInput = document.getElementById("meter");
const feetOutput = document.getElementById("feet");
const m2fcon = document.getElementById("m2fcon");

function meterstoFeet() {
  ans = parseFloat(meterInput.value) * 3.281;
  ans = ans.toFixed(3);
  feetOutput.value = ans;
  return feetOutput;
}

m2fcon.addEventListener("click", () => {
  meterstoFeet();
});

// centimeters to Inches

const cmInput = document.getElementById("cm");
const inchesOutput = document.getElementById("inches");
const cm2inch = document.getElementById("cm2inchcon");

function cmtoInches() {
  ans = parseFloat(cmInput.value) / 2.54;
  ans = ans.toFixed(3);
  inchesOutput.value = ans;
  return inchesOutput;
}
cm2inch.addEventListener("click", () => {
  cmtoInches();
});

// Gram to Pound
const kgInput = document.getElementById("kg");
const poundOutput = document.getElementById("Pound");
const kg2inch = document.getElementById("kg2poundcon");
function kgtopounds() {
  ans = parseFloat(kgInput.value) * 2.205;
  ans = ans.toFixed(3);
  poundOutput.value = ans;
  return poundOutput;
}
kg2inch.addEventListener("click", () => {
  kgtopounds();
});

//   Celsius to Kelvin
const celsius1_Input = document.getElementById("celsius1");
const kelvinOutput = document.getElementById("kelvin1");
const C2K = document.getElementById("c2kcon");

function celtoKel() {
  ans = parseFloat(celsius1_Input.value) + 273.15;
  ans = ans.toFixed(3);
  kelvinOutput.value = ans;
  return kelvinOutput;
}
C2K.addEventListener("click", () => {
  celtoKel();
});

// Celcius to Farenhiet
const celsius2_Input = document.getElementById("celsius2");
const farenhietOutput = document.getElementById("Farenhiet1");
const C2F = document.getElementById("c2fcon");

function celtoFare() {
  ans = parseFloat(celsius2_Input.value);
  ans = ans * (9 / 5) + 32;
  ans = ans.toFixed(3);
  farenhietOutput.value = ans;
}
C2F.addEventListener("click", () => {
  celtoFare();
});
