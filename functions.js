'use strict'
//functions

function showMessage(){
    let msg ="Hello everyone";
    return console.log(msg);
}

function add(x,y){
    if(x==undefined || y== undefined){
        console.log("mising values");
    }else{
        console.log(x + y);
    }
}

function checkAge(age){
    if (age >= 18){ 
        return true; 
    }else{
        confirm("Do you have permision from your parents");
    }
}
/*let age = prompt("Enter your age:","");


if ( checkAge(age) ){
    alert('Access granted')
}else{
    ('Access denied');
}
function showMovie(age){
    if(!checkAge(age)){ return;   }
    alert("Showing you the movie");
}
*/
let greeting = function(){
    console.log("Hello world");
}

function ask(question,yes,no){
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    console.log( "You agreed." );
}
  
function showCancel() {
    console.log( "You canceled the execution." );
}

ask("Do you agree",showOk,showCancel);
let age = prompt("Enter your age","");
let welcome = (age < 18)? 
    ()=> alert("hello"):
    ()=> alert("Greetings");
    
//welcome()

//arrow functions

let sum =(a, b) => a + b;
let salute = (time) => (time>11 && time < 13)?
    alert("noon"):alert('Hello');

let user = {
    name:"john",
    age:35,
    "likes potatoes": true
}

alert(user["likes potatoes"]);