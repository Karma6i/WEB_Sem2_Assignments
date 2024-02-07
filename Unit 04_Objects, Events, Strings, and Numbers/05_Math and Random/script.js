function findNumSign() {
    let number = +document.getElementById("input1").value;

    

    let findNumSign = Math.sign(number);
    document.getElementById("result").innerHTML = Math.sign(number);
    
}

// I'm pretty sure this is how it's supposed to work but I don't really get why the end result comes out that way
