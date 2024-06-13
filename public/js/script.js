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

// Strings in JavaScript 
// Concatenation
const firstname = 'Ellen';
const lastname = 'Ntiamoah';
const middlename = 'Werempoah'
firstname + ' ' + middlename + ' ' + lastname;

// Template literal
`${firstname} ${middlename} ${lastname}`;


//String Methods

let fullName = "ellen werempoah ntiamoah"
fullName.length

for(let i =0; i<= fullName.length -1; i++){
  console.log(i)
}
fullName.toUpperCase()
fullName.charAt(13)
fullName.slice(6,15)
fullName.split("")
fullName.replace("ntiamoah", "bills")
fullName.indexOf("poah")

// string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 5000
console.log(`GHS${amount}`)
amount.toString()

// Write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (email === undefined || email === null) {
    return 'no email provided';
  }
  
// check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided';
  }
  
  
// Add email to participants

participants.push(email);
return 'participant added';
}

addParticipant('eforextrabeauty@gmail.com');
addParticipant('ellenntiamoah@gmail.com');
addParticipant('ellenntiamoah@outlook.com');
addParticipant('ellenntiamoah')
addParticipant();
participants;




// Arrays in JavaScript
// const users = [
// {
//   username: 'ellenntiamoah',
// password: '1234',
// email: 'ellenntiamoah@gmail.com'
// },
// {
//   username: 'ellenntiamoah22',
// password: '12345',
// email: 'ellenntiamoah@outlook.com'
// }  
// ];

// Write a function that will take a user with firstname, lastname and return fullname

function fullName(user) {
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}`
  }
  }

const user = {
  firstname: 'Ellen',
  lastname: 'Ntiamoah'
}

fullName(user);




// Array map
const users = [
  {firstname: 'Dorothy', lastname: 'Obeng'},
  {firstname: 'Melisa', lastname: 'Achia'},
  {firstname: 'Dinah', lastname: 'Asante'},
  {firstname: 'Francis', lastname: 'Aware'},
  {firstname: 'John', lastname: 'Nadom'},
]

// users.map(fullName);


// Square of numbers

function square(number) {
  return number **2;
}
 square(5);

const numbers = [8,7,9,5,6,4,2,3];
numbers.map(square);





// Array filter

function isEven(number) {
  return number % 2 === 0;
}
isEven(9);
numbers.filter(isEven)


// /Write a function that will allow a user to reset their password
//  const user = {
//     email: 'mickeymond@gmail.com',
//     password: '12345'
//   }

function passwordReset(email, newPassword){
 // Check if provided email and password was provided
  if (!email || !newPassword){
    return 'Email or password not provided'
  }  
  //Update password with new one
  if (email=== user.email){
   user.password = newPassword;
    return `Password reset successful`;
  }
  if (email !== user.email){
    return `invalid email`;
  }
}

passwordReset()

// You have been given a array of students with some of them marked asv absent and others marked as present. 
// Write a function that returns the total number of students present 
const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
]

function studentsPresent(students) {
 let total = 0;
 for(let i = 0; i < students.length; i++) {
   if (students[i].present) {
     total++;
   }
}
return total;
}

studentsPresent(students);


// Classes in JavaScript
class Laptop {
 constructor(brand, color) {
   this.brand = brand;
   this.color = color;
 }
}

const laptop1 = new Laptop('Dell', 'black');
const laptop2 = new Laptop('HP', 'silver');
const laptop3 = new Laptop('Compaq', 'grey')

laptop1.brand;
laptop3.brand;


