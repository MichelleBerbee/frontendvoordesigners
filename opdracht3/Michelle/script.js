var requestURL = 'https://open.data.amsterdam.nl/Attracties.json';
 var request = new XMLHttpRequest();
 var laadElement = document.querySelector('span'); //gifje selecteren
 var button = document.querySelector("button");
 var section = document.querySelector('section');
 var div = document.querySelector('div');

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

request.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    showData(request.response)
  }
}

function showData(data) {
  //console.log(data);
  for(var item of data) {
    console.log(item.media);
    //console.log(item.details.nl)

    var container = document.createElement('section')
    container.classList.add('content')
    var titel = document.createElement('h2')
    titel.textContent = item.title
    titel.classList.add('title')
    var foto = document.createElement('img')
    if(item.media.length > 0) {
      foto.src=item.media[0].url
    }
    foto.classList.add('foto')
    var details = document.createElement('p')
    details.textContent=item.details.nl.shortdescription
    var location = document.createElement('p')
    location.textContent=item.location.adress
    var button = document.createElement('button')
    button.textContent = 'Lees meer'

    container.appendChild(titel)
    container.appendChild(location)
    container.appendChild(foto)
    container.appendChild(details)
    container.appendChild(button)
    document.querySelector('section').appendChild(container)
  }
}

//meer informatie laten zien
function event(){
  var buttons = document.querySelector('button')
  for(var button of buttons){
    button.addEventListener('click', function(){
      var parent = this.parentElement
      parent.classList.toggle('active')
    })
  }
}
function showStaten(jsonObj) { //functie voor superhelden
	var staten = jsonObj;
	console.log("show data alle Staten:", staten);
}


function contentInladen() { //data uit database halen
	var request = new XMLHttpRequest(); //maak een nieuw request
	request.open('GET', requestURL); //open dit request met de juiste variabele, requestURL
	request.responseType = 'json'; //zo weet de XHR dat de server een JSON terugkrijgt die moet worden omgezet naar JS object
	request.send(); //verstuur het verzoek naar de server


	request.addEventListener("load", function () { //gifje 5sec laten staan
		setTimeout(function () {
			laadElement.classList.remove('show');
			var datainhoud = request.response; //de response slaan we op in de variabele
			showStaten(datainhoud); //functie die zorgt dat de section word gevult met juiste activiteiten
		}, 5000) //na 5seconden stopt de gif en laadt hij de content
	});

	request.onerror = function () {
		console.log('Fetch Error', request.status);
	};
}

//Eerste actie: button laad data
button.onclick = function () {
	laadElement.classList.add('show'); //weergeven
	section.innerHTML = ""; //html leeg halen
	contentInladen(); //functie hierboven uitvoeren
};
