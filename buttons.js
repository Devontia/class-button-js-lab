let popbutton = document.querySelector("#popbutton")
let bigbutton = document.querySelector("#bigbutton")
let fancybutton = document.querySelector("#fancybutton")
let negativebutton = document.querySelector("#negativebutton")
let button = document.querySelector("#button")
let target = document.querySelector("#target")


var x = true;
var y  = true;
var z = true;
var w = true;
popbutton.addEventListener("click", e => {
    console.log("big button clicked!")
  if(x == true){
    popbutton.classList.add("pop")
    x = false
}else if(x == false){
    popbutton.classList.remove("pop")
     x = true
}
 })

bigbutton.addEventListener("click", e => {
    console.log("big button clicked!")
    if(y == true){
    bigbutton.classList.add("big")
    y = false
}else if(y == false){
    bigbutton.classList.remove("big")
    y = true
}
})
fancybutton.addEventListener("click", e => {
    console.log("fancy button clicked!")
        if(z == true){
    fancybutton.classList.add("fancy")
    z = false
}else if(z == false){
    fancybutton.classList.remove("fancy")
     z = true
}

})
negativebutton.addEventListener("click", e => {
    console.log("negative button clicked!")
    if(w == true){
    negativebutton.classList.add("negative")
    w = false
}else if(w == false){
    negativebutton.classList.remove("negative")
     w = true
}
})


