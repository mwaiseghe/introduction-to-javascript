let myArray = []

console.log(typeof(myArray))

// adding item to an array

myArray.push("Wake", "Code", "eat", "walk", 'review', 'movie', 'sleep')

console.log(myArray);

// add at the beginning
myArray.unshift("Before")

// shift removes first elemet
//pop removes at the end

console.log(myArray);

//splice delete in a range e.g myArray.slice(start, end)
//splice to delete and replace e.g myArray.slice(start, end, replace state)
// To delete last ite,m e.g myArray.slice(-1)

// fill, replace all fields with the one in arguments

//concat - Join Arrays

let filterArray = myArray.filter(
    el => {
        return el.includes("ode")
    }
)

console.log(filterArray)

// .flat, combines an array