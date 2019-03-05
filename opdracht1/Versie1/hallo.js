var buttons = document.querySelectorAll("footer button")


for(let i = 0; i < buttons.length; i++){ //door de rij heen
  buttons[i].addEventListener("click",function(e){
    e.preventDefault() //niet opnieuw laden

  var section = e.target.parentNode.nextElementSibling
    section.classList.toggle("active")
  })
}
