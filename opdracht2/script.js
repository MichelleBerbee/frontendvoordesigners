var slideIndex = 1;
showSlides(slideIndex);

// de knoppen
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  //fotos ophalen
  var slides = document.getElementsByClassName("foto");
  //waar ben ik puntjes ophalen
  var waarbenik = document.getElementsByClassName("waarbenik");
  //als aantal fotos minder is dan n dan wordt het 1
  if (n > slides.length) {slideIndex = 1}
  //als n kleiner is dan 1 wordt index gelijk aan aantal afbeeldingen
  if (n < 1) {slideIndex = slides.length}
  //i is 0, als i kleiner is dan aantal afbeeldingen komt er 1 bij
  for (i = 0; i < slides.length; i++) {
    //de rest wordt verborgen
      slides[i].style.display = "none";
  }

  //zodat je kunt zijn waar je bent met de rechthoeken onderin
  for (i = 0; i < waarbenik.length; i++) {
      waarbenik[i].className = waarbenik[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display = "block";
  waarbenik[slideIndex-1].className += " active";
}
