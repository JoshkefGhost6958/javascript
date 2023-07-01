let x = 1;

const ParentFunction = ()=>{
  //local scope

  let myValue = 2;
  console.log(x + myValue);
  const childFunction = ()=>{
    //lexical scope
    return x * myValue; 
  }
  return childFunction
}
let result =ParentFunction();
let result2 = ParentFunction();

//immediately invoked functon expression
const privateCounter = (()=>{
  let count = 0;
  console.log(`initial value: ${count}`);
  return ()=>{count += 2;console.log(count)}
})();

const buy_tokens = ((num)=>{
  let credits = num;
  console.log(`initial credits: ${credits}`);
  return ()=>{
    credits -= 1;
    if(credits <= 0) console.log("sorry! not enough credits to play");
    if(credits > 0) console.log(`playing game, ${credits} credits(s)`);
  }
})(3);
buy_tokens();
buy_tokens();
buy_tokens();

// object inheritance
const person = {
  name:"kefason",
  age:22,
  dob:"2/19/2002",
  get get_person(){
    return this.name;
  },
    /**
   * @param {Number} value
   */
  set person_age(value){
    this.age = value;
  },
    /**
   * @param {string} value
   */
  set person_name(value){
    this.name = value;
  }
}

const student = {
  admission_number:"pa106/g/9972/20",
}

const software_engineer = {
  __proto__:student
}

//student.__proto__ = person;
person.person_name ="john";
console.log(person.name);
Object.setPrototypeOf(student,person);
//console.log(Object.getPrototypeOf(student)=== student.__proto__);
Object.keys(software_engineer).forEach(key => {
  console.log(key);
});
// iterates over the keys of the child and parent
for (key in student){
  console.log(key);
}
function Animal(species){
    this.species = species;
    this.eats = true;
}
Animal.prototype.walks = function (){
  return `A ${this.species} is walking`;
}
let A = new Animal('wolf');
console.log(A.walks());

class Car{
  constructor(){
    this.is_tinted = false;
    this.is_registered = false;
  }
  tint_car(){
    this.is_tinted = true;
  }
}

class mercedes extends Car{
  constructor(){
    super();
    this.wheels = 4;
  }
  wheelie(){
    return `on one wheel now`;
  }
}

const KAW = new mercedes()
KAW.tint_car();
let gucci = KAW.wheelie();
console.log(KAW.is_tinted)
console.log(gucci)
console.log(KAW)