var ringButton = document.querySelector('.ring-input-btn')
var stockButton = document.querySelector('.stock-input-btn')

var width = document.querySelector('.input-width');
var thickness = document.querySelector('.input-thickness');
var length = document.querySelector('.input-length');

var size = document.querySelector('.dropdown-item');

var volumeResult = document.querySelector('.volume-result');
var calculatorButton = document.querySelector('.calculator-button');

var stockWidth = document.querySelector('.stock-width');
var stockThickness = document.querySelector('.stock-thickness');
var stockCalcButton = document.querySelector('.stock-button');
var stockResult = document.querySelector('.stock-result');

var squareRollButton = document.querySelector('.square-roll-button');
var squareRollResult = document.querySelector('.square-roll-result');

var squareRollResult2 = document.querySelector('.square-roll-2-result');

var lengthDiv = document.querySelector('.lengthDiv');

var convertButton = document.querySelector('.convertWeight-input-btn');
var startingWeight = document.querySelector('.input-starting-weight');
var finalWeightOutput = document.querySelector('.finalWeight-result');

var weightFromVolButton = document.querySelector('.weightFromVol-input-btn');
var volResult = document.querySelector('.vol-result');
var finalVolResults = document.querySelector('.volume-results');

function getRingLengthValue()
{
  var ringLengthValue = document.getElementById("ringdropdown").value;
  var internalDiameter = parseFloat(ringLengthValue);
  var ringThickness = thickness.value;
  var ringLength = ((parseFloat(internalDiameter) + parseFloat(ringThickness)) * Math.PI);
  document.getElementsByClassName("ring-shank-length")[0].innerHTML = Number((ringLength).toFixed(2)) + " mm";
}

ringButton.addEventListener('click', ()=>{
  document.getElementsByClassName("ring-width")[0].innerHTML = width.value + " mm";
  document.getElementsByClassName("ring-width")[1].innerHTML = width.value + " mm";
  document.getElementsByClassName("ring-width")[2].innerHTML = width.value + " mm";
  document.getElementsByClassName("ring-thickness")[0].innerHTML = thickness.value + " mm";
  document.getElementsByClassName("ring-thickness")[1].innerHTML = thickness.value + " mm";
  document.getElementsByClassName("ring-thickness")[2].innerHTML = thickness.value + " mm";
  document.getElementById("ring-length").innerHTML = length.value + " mm";

  if (length.value < 1) {
    var hideLength = document.getElementById("ring-length");
    hideLength.style.display = 'none';
  }

  var ringLengthValue = document.getElementById("ringdropdown").value;
  var internalDiameter = parseFloat(ringLengthValue);
  var ringThickness = thickness.value;
  var ringLength = Number(((parseFloat(internalDiameter) + parseFloat(ringThickness)) * Math.PI).toFixed(2));


  if (length.value != 0){
    var result = width.value * thickness.value * length.value;
      if (width.value < 0.99) {
          alert("Width must be greater than 1.0mm");
          return false;
      }
      if (thickness.value < 0.99) {
          alert("Thickness must be greater than 1.0mm");
          return false;
      }
    volumeResult.innerHTML = result + "mm³";
    volResult.innerHTML = result + "mm³";
  }
  else if (ringLength != 0){
    var result = width.value * thickness.value * ringLength;
      if (width.value < 0.99) {
          alert("Width must be greater than 1.0mm");
          return false;
      }
      if (thickness.value < 0.99) {
          alert("Thickness must be greater than 1.0mm");
          return false;
      }
    volumeResult.innerHTML = result + "mm³";
    volResult.innerHTML = result + "mm³";
  }

  var result1 = width.value / thickness.value;
  var result2 = parseFloat(result1) * 0.8;
  var result3 = thickness.value;
  var result4 = parseFloat(result2) + parseFloat(result3);
  squareRollResult.innerHTML = "roll your stock down to " + result4 + "mm x " + result4 + "mm";

  var squareResult2a = (width.value * width.value);
  var squareResult2b = squareResult2a * thickness.value;
  var squareResult2 = (Math.cbrt(squareResult2b));
  squareRollResult2.innerHTML = "roll your stock down to " + Number((squareResult2).toFixed(2)) + "mm x " + Number((squareResult2).toFixed(2)) + "mm";
})

stockButton.addEventListener('click', ()=>{
  document.getElementById("stock-width").innerHTML = stockWidth.value + " mm";
  document.getElementById("stock-thickness").innerHTML = stockThickness.value + " mm";

  var ringLengthValue = document.getElementById("ringdropdown").value;
  var internalDiameter = parseFloat(ringLengthValue);
  var ringThickness = thickness.value;
  var ringLength = ((parseFloat(internalDiameter) + parseFloat(ringThickness)) * Math.PI);

  if (length.value != 0){
    var volresult = width.value * thickness.value * length.value;
    var divisor = stockWidth.value * stockThickness.value;
    var result = volresult / divisor;
    stockResult.innerHTML = "you need a " + Number((result).toFixed(2)) + "mm length of " + stockWidth.value + "x" + stockThickness.value + " stock gauge";
  }
  else if (ringLength != 0){
    var volresult = width.value * thickness.value * ringLength;
    var divisor = stockWidth.value * stockThickness.value;
    var result = volresult / divisor;
    stockResult.innerHTML = "you need a " + Number((result).toFixed(2)) + "mm length of " + stockWidth.value + "x" + stockThickness.value + " stock gauge";
  }
})

function yesnoCheck(that) {
    if (that.value == "len") {
        document.getElementById("lengthinput").style.display = "block";
    } else if (that.value == "rlen") {
        document.getElementById("ringinput").style.display = "block";
    }
}

convertButton.addEventListener('click', ()=>{
  var startingMaterialSG = document.getElementById("startingMaterialDropdown").value;
  var finalMaterialSG = document.getElementById("finalMaterialDropdown").value;

  var finalWeight = ((parseFloat(startingWeight.value) / parseFloat(startingMaterialSG)) * parseFloat(finalMaterialSG));
  console.log(finalWeight);

  finalWeightOutput.innerHTML = "The converted weight of the piece will be " + Number((finalWeight).toFixed(2)) + " grams";
})

weightFromVolButton.addEventListener('click', ()=>{
  var materialSGString = document.getElementById("materialDropdown").value;
  var materialSG = (parseFloat(materialSGString))
  console.log(typeof(materialSG));
  console.log(materialSG);
  var resultVolume = document.getElementsByClassName("vol-result")[0].innerHTML;
  var finalResultVolume = (parseFloat(resultVolume));
  console.log(volResult);

  var weightFromVolume = (materialSG * finalResultVolume) / 1000;
  console.log(weightFromVolume);

  finalVolResults.innerHTML = "The weight of your piece will be " + Number((weightFromVolume).toFixed(2)) + " grams";
})

