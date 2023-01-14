'use strict'
//coalescing operator ??
//helps choose the first defined element in the list

let fullname={first_name:null,last_name:"doe"};

function get_a_name(fullname){
    return fullname.first_name ?? fullname.last_name;
}

let user =get_a_name(fullname);
console.log(user);
let passwd = 7789;

let cell_length = null;
let cell_width = null;

let cell_area = (cell_length ?? 6) * (cell_width ?? 4);


((passwd == 7789 )?? (passwd==9999))?
    console.log("access granted"):
    console.log("access granted");
console.log(cell_area)