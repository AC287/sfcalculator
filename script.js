$(document).ready(function(){
  console.log('JQuery is running capt!');

  var cellFanKit = [1500, 3000, 5000];  // assigned fixed value as array
  var ach = ["iso8-15", "iso7-30", "iso6-90"];  // assigned fixed value as array

  $("#sfcalculator").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#ceiling-height").val()); // convert user input string into integer.

    ach.forEach(function(ach,index){  // This is first loop.
      cellFanKit.forEach(function(cfk,index){ // This is second loop within loop.
        var currentClassData = "."+ach+"-"+cfk; // Assigned current loop section class.
        var achVal = parseInt(ach.split("-")[1]); //get ACH value from array using split.
        var calculation = Math.round((cfk*60)/(userInput*achVal));  // calculation
        $(currentClassData).html(calculation);  // Assigned calculated value to html.
      })
    })

  })

  $("#user-reset").click(function(event){ // This reset everything.
    event.preventDefault();
    $("#sfcalculator")[0].reset();
    ach.forEach(function(ach,index){
      cellFanKit.forEach(function(cfk,index){
        var currentClassData = "."+ach+"-"+cfk;
        $(currentClassData).empty();
      })
    })
  })
})
