const btn = document.getElementById('btn');
btn.onclick = function () {
   const name = prompt('enter your full name');
   document.getElementById('name').innerText = name;
}

// variables
/*const pi = 3.142;
let username = 'ellenakosuaa';
let age = 101;
let present = false;

// objects
const person = {
    username: 'ellenakosua',
    age: 101,
    present: false,
    child:{
        name: 'Ellen',
        friend:{
        name: 'Evans',
        } 

    }
}*/


/*console.log(person.username);
console.log(person.age)
console.log(person.present)
person.age = 125
console.log(person)

console.log(person.child.friend.name = 'mercy');*/



// Arrays
const bottle1 = {
    size: 'Large',
    color: 'pink'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'white'
  }
  
  
  
  const bottles = [bottle1, bottle2];
  bottles;
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[2]
  bottles[1].size;
  bottles[1].color;
  
  const date = new Date();
  date.getDay();
  date.toString();
  
  // if/Else
  const age = 18
  if (age>=18) {
    'You are True'
  } else {
    'You are False'
  }
  
  // For loop
  for (let i = 0; i <= 5; i++) {
    console.log('We did it!',i )
  
  }
  
  for (let i = 0; i <= bottles.length; i++) {
    // console.log('We did it!',i )
    console.log(bottle1)
  
  }
    
  // functions
// defining a function 
function login(username, password) {
  // validate username and password
  if (!username || !password) {
    return 'username or password not provided';
  }
  // verify username and password
  if (username == 'ellenakosuaa' && password == '1234') {
    return 'user is logged in';
     } else {
       return 'invalid username or password'
     }
    
}

// invoking a function
login('ellenakosuaa');

// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
43 - 12;
45 / 7; 
89 * 8;
14 % 3