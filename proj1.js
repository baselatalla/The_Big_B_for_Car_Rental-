confirm("Are you ready to start");

var name1 = prompt("Inter your name");
var barthdate = prompt("Inter your barth date");



if(barthdate < 2022 ){
    var age = 2021 - name1 ;
}
var element = document.getElementById("yourage");
element.innerText= "Your Age is " + age;
