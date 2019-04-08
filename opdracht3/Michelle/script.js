/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var requestURL = 'https://open.data.amsterdam.nl/Attracties.json';

var laadElement = document.querySelector('span'); //gifje selecteren
var button = document.querySelector('button');
var section = document.querySelector('section');
var div = document.querySelector('div');

function showData(jsonObj) {
	var data = jsonObj;
	console.log(data);

	for (var i = 0; i < data.length; i++) {
		//console.log(data[i]);
		var container = document.createElement('section');
		container.classList.add('content');

		var titel = document.createElement('h2');
		titel.textContent = data[i].title;
		titel.classList.add('title');

		var foto = document.createElement('img');
		if (data[i].media.length > 0) {
			foto.src = data[i].media[0].url;
		}
		foto.classList.add('foto');

		var details = document.createElement('p');
		details.textContent = data[i].details.nl.shortdescription;
		details.classList.add('details');

		var location = document.createElement('p')
		location.textContent = data[i].location.adress;

		var button = document.createElement('button');
		button.textContent = 'Lees meer';

		button.info = details;
		button.onclick = function () {
			console.log("click this =" + this.info, this); //met this, verwijs je naar het object zelf waar de functie wordt uitgevoerd, hier gebruik ik de variabale die in in het object heb aangemaakt
			//console.log("parentNode",this.parentNode);
			this.info.classList.toggle('show');
		} //end: reviewsheader onClick

		container.appendChild(titel);
		container.appendChild(location);
		container.appendChild(foto);
		container.appendChild(details);
		container.appendChild(button);
		document.querySelector('section').appendChild(container);
	}
}

function contentInladen() { //data uit database halen
	var request = new XMLHttpRequest(); //maak een nieuw request
	request.open('GET', requestURL); //open dit request met de juiste variabele, requestURL
	request.responseType = 'json'; //zo weet de XHR dat de server een JSON terugkrijgt die moet worden omgezet naar JS object
	request.send(); //verstuur het verzoek naar de server

	request.addEventListener("load", function () { //gifje 4sec laten staan
		setTimeout(function () {
			laadElement.classList.remove('show');
			var datainhoud = request.response; //de response slaan we op in de variabele
			showData(datainhoud); //functie die zorgt dat de section word gevult met juiste activiteiten
		}, 4000) //na 4seconden stopt de gif en laadt hij de content
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
}
