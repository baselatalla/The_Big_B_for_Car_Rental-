confirm("Are you ready to start");

var name1 = prompt("Inter Your Name :");
var birthdate = prompt("Inter Your birth date :");
var weight = prompt("Inter Your Weight ( in Kg) :");
var tall = prompt("Inter Your Tall (in cm Ex = 172 ) :");

var intage=parseInt(birthdate);
var intweight=parseInt(weight);
var inttall=parseInt(tall);

if(intage < 2022 ){
    var age = 2021 - intage ;
    console.log("your birth date is valid");
} else {console.log("your birth date is not valid") ;
alert("your birth date is not valid") ;
}
console.log(intweight); 
console.log(inttall);
var x = intweight;
var y = inttall;
console.log(x); 
console.log(y);
var gh =" in the healthy rang";
var ow =" overweight";
var uw =" underweight";

if(18 <= age && age <=65){
    var bmi =(x/(y ** 2))*10000; 
    console.log("your age are applicable to the BMI");
    console.log(bmi);
} else{ console.log("your age are not applicable to the BMI");
          var yourhealth ="You are under the age ";
          alert("your birth date is not valid") ;
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
console.log(message);
console.log(bmi);
var element = document.getElementById("yourage");
element.innerText = name1 + "  Your Age is : " + age;

var element1 = document.getElementById("healthindex");
element1.innerText = "Your health index :"+ yourhealth ;

var element2 = document.getElementById("yyy");
element2.innerText = "Advice :"+  message ;

var element3 = document.getElementById("ssss");
element3.innerText = " Your BMI  : " + bmi ;
