//array below
function ArrayListing(){
   const flavors = ["Chocolate", "Strawberry", "Vanilla"];

   let fLen = flavors.length;

   let text1 = "<ul>";
   for (let i = 0; i < fLen; i++) {
     text1 += "<li>" + flavors[0] + "</li>";
     
   }
   text1 += "</ul>";

document.getElementById("flavors").innerHTML = text1;
}



//object below
function ObjectListing(){
    const animals = {animal1:"Rabbit", animal2:"Frog", animal3:"Dolphin"};

let text2 = "";
for(let x in animals){
    text2 += animals[x] + "<br>";
}

document.getElementById("text2").innerHTML = animals[x];
}
