

// if statments

let user = {
    id: 2,
    name: "Gift",
    car: "Audi RS8",
}

if (user.car.includes("Audi")){
    console.log("Nice Car");
}
else if (user.car.includes("RS")){
    console.log("Need a race mate");
}
else {
    console.log("You need an upgrade");
}


// Ternary Operator : If, Else if
console.log()
console.log("Ternary Operator")

user.car == 'BMW' ? console.log("Wow! a BMW") : user.car.includes("Audi")  ? console.log("Great Power Man") : console.log("Which One Then")

//while loop
console.log();

console.log("While loop");
let i = 0;
while (i<10){
    console.log(i)
    i++
}


// for loop
console.log();
console.log("for loop");
for (let x = 0; x<10; x++){
    console.log(x)
}

// do while
let j = 10;
do {
    console.log(j);
    j--
} while(j>0)

