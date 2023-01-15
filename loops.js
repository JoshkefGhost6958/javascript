'use strict'
//loops

let password = prompt("Enter password:","");

while (password.length < 1){
    alert("no password was entered");
    password = prompt("Enter password:","");
}
alert("Verifying");


let owners = ['john',`james`,'Roy'];
let cars=[`bmw`,'mercedes','rolls royce'];

let i = 0;
for(;i<cars.length;i++){
    console.log(cars[i]);
}

/*an infinity loop
for(;;){
    console.log("Foo");
}
*/
let j = 0;
outer:for (; i < 3; i++) {
    for (; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // what if we want to exit from here to Done (below)?
      if (!input) break outer;
    }
  }
  
alert('Done!');

let a = 2 + 9;
let grade = 'A';

let b = 0;
switch(a){
    // allow for abitary expressions
    case b + 11:
        console.log(`11 was added to b to make it 11 which is same as a`);
        console.log("Thats why it ran");
        break;
    default:
        console.log("this doesn't run");
}


switch(grade){
    case 'A':
        console.log(`Excellent: ${grade}`);
        break;
    case 'B':
        console.log('almost at the top');
        break;
    case 'C':
        console.log('pass');
        break;
    default:
        console.log('grade not in our system');
}

//grouping of cases


let d = 90;

switch(d){
    case 3 + 1:
        console.log("Right");
        break;
    case 3:
    case 3 + 2:
        console.log("Wrong");
        console.log("take a math class bruh");
        break;
    default:
        console.log('The result is rather strange')
}
let browser = 'Opera';
(browser == 'Edge')?console.log('Youve got the Edge'):
(browser=='Chrome' || browser=='FireFox' || browser=='Safari' || browser=='Opera')?console.log("we suport that too"):console.log('we hope that this page looks okay');

let g = 88;
switch(g){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log(2,3);
        break;
    default:
        console.log("unaccounted for instance");
        break;
}