confirm("Are you ready to start");

var name1 = prompt("Inter Your Name :");

var birthdate = prompt("Inter Your birth year Ex=(1990) :");
var intage=parseInt(birthdate);

var birthdate = prompt("Inter Your birth year (1999) :");
var weight = prompt("Inter Your Weight ( in Kg) :");
var tall = prompt("Inter Your Tall (in cm Ex = 172 ) :");

while( 1900 > intage || intage > 2021 || isNaN(intage) ){
    alert("your birth date is not valid") ;
    console.log("your birth date is not valid");
var birthdate = prompt("Inter Your birth year Ex=(1990) :");
var intage=parseInt(birthdate);
}

if(1900 <intage || intage < 2021 ){
    var age = 2021 - intage ;
    console.log("your birth date is valid");
}  


var weight = prompt("Inter Your Weight ( in Kg) :");
var tall = prompt("Inter Your Tall (in cm Ex = 172 ) :");
var reImage = prompt(" how many glasse of wtare did you drink a day?")
var intweight=parseInt(weight);
var inttall=parseInt(tall);
var intreimage=parseInt(reImage);
// print images using for loop
var counter =0 ;
var g = intreimage ;
for (var i =1 ; i <= g ; i++){
    counter++;
    document.write('<img src="./images/water.jpg" alt="">' + '<h3>'+ counter + '</h3>');

}
var x = intweight;
var y = inttall;

var gh =" in the healthy rang";
var ow =" overweight";
var uw =" underweight";

if(18 <= age && age <=65){
    var bmi =(x/(y ** 2))*10000; 
    console.log("your age are applicable to the BMI");
    console.log(bmi);
} else{ 
    console.log("your age are not applicable to the BMI");
         if (18 > age > 0) {var yourhealth ="You are under the age ";}
          console.log(" No BMI for under 18") ;
}

if( 18.5 <= bmi && bmi <= 24.9 ){
    var yourhealth = " in the healthy rang";
    console.log("good health");
} else{ if( bmi >= 25){
    var yourhealth =" overweight";
    console.log("go and cut weight");
} else { if(bmi <= 18){
    var yourhealth =" underweight";
    console.log("go and gain some weight");}}} 

    if(yourhealth === gh ){
        var message = " Keep it healty ;)";
    }else{
        if (yourhealth === ow ){
            var message = " Go  cut some weight :("; 
        }else {
            if (yourhealth === uw ){
                var message = " Go  gain some weight ...";
            }
        }
    }
 // how much water needed according to your mass  using the function
 // water ( in liters) = weight (in kg) * .033
  function waterCal(g,intweight){
  var waterMustDrink = intweight * 0.033;
  var waterYouDrink = g * .3;
  var waterNeeded = waterMustDrink - waterYouDrink;
  alert("You have to drink more water by : " + waterNeeded+'L' )

  } waterCal( g, intweight);

console.log(bmi);
var element = document.getElementById("yourage");
element.innerText = name1 + "  Your Age is : " + age;

var element1 = document.getElementById("healthindex");
element1.innerText = "Your health index :"+ yourhealth ;

var element2 = document.getElementById("yyy");
element2.innerText = "Advice :"+  message ;

var element3 = document.getElementById("ssss");
element3.innerText = " Your Body Mass Index (BMI)  : " + bmi ;
