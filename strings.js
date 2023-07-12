let x = "yoG=*";

console.log(x);

let backTick = `used Backticks`;
console.log(backTick);

console.log(backTick.length)

let addedVars = x.concat(" "+backTick)

console.log(addedVars);

console.log(addedVars.toLowerCase())
console.log(addedVars.toUpperCase())

let yearOfGrad = 2023

console.log(typeof(yearOfGrad))

let yearString = yearOfGrad.toString()

console.log(typeof(yearString))

let ambigousNum = Number.parseFloat(yearString)

console.log(ambigousNum)