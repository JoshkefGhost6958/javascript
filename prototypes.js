let user = {
  name:"John Doe",
  age:21
}
Admin = {
  __proto__:user,
  passcode:{
    code_1: "223!!9AsI",
    code_2:"9904UUH19"
  },
  reset_phrase:{
    code:"aint this just fantastic"
  }
}

let employee = {
  id:1,
  name:"luca modric",
  status:"expert",
  is_active:true
};
let employee_b = {
  id:1,
  name:"Messi",
  status:"guru",
  is_active:true
};

/**@param {Object} User 
 * @param {Object} employee
*/
function create_user(User){
  return User;
}

const view_employee = (employee) => {
  return employee;
};
//prototype is used to add new methods to object constructors
/**
 * 
 * @param {Number} id 
 * @param {String} name 
 * @param {String} email 
 */
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
Employee.prototype.get_name = function(){
  return this.name;
}

let user_a = create_user(user);
const employee_c = new Employee(3,"diego","diego@gmail.com");
console.log(employee_c.get_name());