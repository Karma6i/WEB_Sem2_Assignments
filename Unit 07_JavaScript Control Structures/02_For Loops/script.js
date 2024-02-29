//array for of loop
const flavors = ["Chocolate", "Strawberry", "Vanilla"];

  let fLen = flavors.length;
  
  let text1 = "";
  for (let i of flavors) {
    text1 += "<li>" + i + "</li>";   
  }
  document.getElementById("flavors").innerHTML = text1;



//object for in loop
const animals = {animal1:"Rabbit", animal2:"Frog", animal3:"Dolphin"};

let text2 = "";
for(let x in animals){
  text2 += "<li>" + animals[x];
}
document.getElementById("animals").innerHTML = text2;