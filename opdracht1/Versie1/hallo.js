var button = document.querySelector("footer button")

button.addEventListener("click",function(e){
  e.preventDefault()


  var test = document.querySelector(".hallo")
  test.classList.toggle("active")
})
