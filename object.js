console.log("Goodmorning Africa");


let pass = 9990;
let isVerified = null;
(pass == 990)?
    isVerified = true :
    isVerified = false;
console.log(isVerified);
//let pie ;
//pie = pie ?? 3.142;
let pie;
function setPie(pie){
    return pie = pie;
}

function Area(r){
    pie = setPie(3.14);
    let par = pie ?? 3.142;
    return par * r * r;
}

let val = Area(7);
console.log(val);


let user = {
    name:"john",
    school:"bussiness",
    "Alergic to beans":true
}


console.log(user["Alergic to beans"])
let makeUser = function(name,id){
    return {name:name,user_id:id}
}
console.log(makeUser("vice",99));

let obj = {};
obj.__proto__ = 2;

if ("school" in user){
    console.log(user.school);
}else{
    console.log("No such property exists");
}

for(let key in user){
    console.log(user[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for(let code in codes){
    console.log(code);
}
let car = {
    "type":"bmw",
    "model":"x series",
    "is on sale":true
};
let clone =Object.assign({},car);
/*
for(let key in car){
    clone[key] = car[key];
}*/
console.log(clone["is on sale"]);
let title_deed = {
    name:"vice",
    plot:{
        length:22,
        width:44
    },
    national_id:39336001,
    isKenyan:true,
    owner:function(){
        console.log(this.name);
    }
}
/*let fake_deed = structuredClone(title_deed);
fake_deed.plot.width = 22;
console.log(fake_deed.plot.width);
*/
title_deed.owner();
function User(user){
    if(!new.target){
        return new User(user);
    }
    this.name = user;
    this.isAdmin = false;
}
let person = User("Ricky");
console.log(person.isAdmin);


