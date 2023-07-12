let header = document.getElementById("main-header")
header.style.color = "green"


let paragraphs = document.getElementsByClassName("para")
console.log(paragraphs)

let pars = document.querySelectorAll(".para")

// for (let i=0; i<paragraphs.length; i++){
//     paragraphs[i].style.color = "blue"
// }

pars.forEach(item=>{
    item.style.color = "blue"
})

let button = document.querySelector(".btn")

button.addEventListener('click', ()=> {
    button.innerHTML = " Success"
    button.style.color = "green"
})



