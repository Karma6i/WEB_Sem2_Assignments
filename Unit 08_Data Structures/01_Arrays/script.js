const numbers = []

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);

}

document.getElementById("unsorted").innerHTML = numbers;



const numbers1 = []
numbers1.sort();

for(let i = 0; i < 10; i++){
    let num1 = Math.floor(i) + 1;
    numbers1.push(num1);

}

document.getElementById("sorted").innerHTML = numbers1;