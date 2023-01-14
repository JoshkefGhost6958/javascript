'use strict'

function pow(x,n){
    if(n==1){
        return x
    }else{
        return x * pow(x,n-1)
    }
}
//console.log(pow(2,3));
let message;
message="Enter the passcode to decrypt message"

const $CURRENCY = "Dollar";

let string = "welcome";
//string formating
let gmtxt = `${string} to TopDevs`;
//backsticks are for extnded functionality
 
let isVetted = false;
let array = null;

console.log(`hello ${"vicephar"}`)
//modal windows
//alert()

/*promt accepts two argumments
let user = prompt("What is your name?","");
let out = `you name is ${user}`;
*/
var vet = String(isVetted);
console.log(typeof vet)

/*document.getElementById("user").innerText=out
//if a string is not a valid number an error is raised during conversion
//result of the conversion is :NaN
in numeric conversion:
   undefined - NaN
   null - 0
   true and false: 1 and 0
   if its an empty string its evaluated to 0
*/

//unary operator was appled (-)

let x = 1;
x = -x;


//an operator is binary if it has 2 operands

let y=0,z=12;
console.log(z-y)

//chaining assignments to values

let id = 9972;
let login = (id==9972);
//to use the value of an increment use the prefix ++val

//when using both values .. val and increment use postfix val++

if(login){
    console.log("login was successfull");
}else{
    console.log("Invalid credentials")
}
let age = prompt("Enter your age:","")
let access_allowed;
if (age < 18){
    alert("you are not authorised to view this site");
    access_allowed = false;
}else if(age>=18) {
    access_allowed=true;
    alert("proceed");
}else{
    access_allowed=true;
    alert("proceed");
}
console.log("authenticated: "+ access_allowed);

let marks = prompt("Enter marks for evaluation:","")
let high_grade = (marks => 80) ? true: false;
console.log(high_grade)
let evaluate = (marks<40) ? `failed grade`: 
    (marks>40 && marks < 50) ? `try harder next time`:
    (marks == 50) ? `Average`:
    (marks>50 && marks<=60) ? `Above average`: 
    (marks>60) ? `keep it up (exelling)` :
    "invalid grade";

alert(evaluate)

let company = prompt("Which company created javascript","");

(company=="NetScape")?
    alert("Right") : ("Wrong");

let hour = 17;
let isWeekend = true;
let isWeekday = true;
let isOpen;

(hour<=10 || hour >= 18 || isWeekend)?
        isOpen=false:
(hour>=10 || hour <= 18 || isWeekday)?
        isOpen=true:
        isOpen = false;

(isOpen)? console.log(`we are open for business`) : console.log('we are closed!!');


