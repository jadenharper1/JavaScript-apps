//this needs the ability to add slight increments to each tile and grout joint in order to account for thinset build which changes layout slightly.

//this also needs the ability to read 64ths and 32ns in "b+, +, ++", for easier reading of exact measurements.

var groutJoints = [0.015625, 0.03125, 0.0625, 0.125, 0.1875, 0.25, 0.375, 0.5];

function fracToDec() {
  let wholeNumber = document.getElementById("widthId").value;

  let fraction = document.getElementById("fractionId").value;

  let indexOfVinculum = fraction.indexOf("/");
  let numerator = fraction.substring(0, indexOfVinculum).trim();

  let denominator = fraction.substring(indexOfVinculum + 1).trim();

  let decimal = numerator / denominator;

  let measurementDecimal = parseFloat(decimal) + Number(wholeNumber);

  getDecimal = function () {
    return measurementDecimal;
  };
}

function storyStick() {
  let selectedJointIndex = document.getElementById("groutJointId").value;

  let tileAndJointWidth = getDecimal() + groutJoints[selectedJointIndex];

  let tileCount = document.getElementById("numberOfTilesId").value;

  for (let i = 1; i <= tileCount; i++) {
    simpleFraction(i * tileAndJointWidth);
  }
}

function simpleFraction(val) {
  let measurement = val;
  let whoOfMeas = Math.floor(measurement);
  let decOfMeas = measurement - whoOfMeas;
  let fracDen = 64;
  let oneSixtyFourthDec = 0.015625;
  let strongSymbols = ["b+", "+", "++", ""];
  if (decOfMeas > oneSixtyFourthDec) {
    let indexSymbol = Math.round(decOfMeas / oneSixtyFourthDec);
  } else {
    let indexSymbol = 3;
  }

  let aa = 1 - decOfMeas;
  let num = decOfMeas / aa;
  let den = 1 / aa;
  let maths = fracDen / den;
  den = den * maths;
  num = num * maths;
  let numR = Math.round(num);

  check = function () {
    if (numR % 2 == 0 && den % 2 == 0) {
      numR = numR / 2;
      den = den / 2;
    }
  };
  check();
  check();
  check();
  check();

  if (numR == den) {
    console.log(numR / den);
  } else if (numR == 0) {
    console.log(whoOfMeas);
  } else {
    console.log(whoOfMeas + " " + numR + "/" + den);
  }

  getMeasurement = function () {
    return whoOfMeas + " " + numR + "/" + den;
  };

  return;
  getMeasurement();
}
