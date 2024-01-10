let firstName = prompt("What is your first name?");

let lastName = prompt("What is your last name?");


let fullName = firstName + " " + lastName;
console.log(fullName);

document.getElementById("name").innerHTML = fullName;