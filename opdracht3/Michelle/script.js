/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var requestURL = 'https://open.data.amsterdam.nl/Attracties.json'; //aangeven waar de data staat
var laadElement = document.querySelector('span'); //gifje selecteren
var button = document.querySelector('button'); //beginbutton
var section = document.querySelector('section'); //section in html selecteren
var div = document.querySelector('div');

function showData(jsonObj) { //dat het json is
	var data = jsonObj;


		for (var i = 0; i < data.length; i++) { //loopt door alle knoppen heen
		var container = document.createElement('section'); //section creeeren
		container.classList.add('content');

		var titel = document.createElement('h2'); //titel creeeren
		titel.textContent = data[i].title; //waar staat de titel in de json
		titel.classList.add('title');

		var foto = document.createElement('img'); //element voor de afbeelding aanmaken
		if (data[i].media.length > 0) { //waar staat het?
			foto.src = data[i].media[0].url;
		}
		foto.classList.add('foto');

		var details = document.createElement('p');
		details.textContent = data[i].details.nl.shortdescription;
		details.classList.add('details'); //details heet het bestand wat we ophalen

		var location = document.createElement('p') // locatie ophalen in de alinea
		location.textContent = data[i].location.adress;

		var button = document.createElement('button'); //button aanmaken
		button.textContent = 'Lees meer'; //wat er in de button staat

		button.info = details; //aangeven dat de button details inhoudt
		button.onclick = function () {
			console.log("click this =" + this.info, this); //met this, verwijs je naar het object zelf waar de functie wordt uitgevoerd
			this.info.classList.toggle('show'); //this laten zien
		}

		container.appendChild(titel); //alle info weergerven in container
		container.appendChild(location);
		container.appendChild(foto);
		container.appendChild(details);
		container.appendChild(button);
		document.querySelector('section').appendChild(container); //section ophalen
	}
}

function contentInladen() { //data uit database halen
	var request = new XMLHttpRequest(); //maak een nieuw request
	request.open('GET', requestURL); //open dit request met de juiste variabele, requestURL
	request.responseType = 'json'; //zo weet de XHR dat de server een JSON terugkrijgt die moet worden omgezet naar JS object
	request.send(); //verstuur het verzoek naar de server

	request.addEventListener("load", function () {
		setTimeout(function () { //timer zetten
			laadElement.classList.remove('show'); //gifje 4sec laten staan
			var datainhoud = request.response; //de response slaan we op in de variabele
			showData(datainhoud); //functie die zorgt dat de section word gevult met juiste activiteiten
		}, 4000) //na 4seconden stopt de gif en laadt hij de content
	});

	request.onerror = function () {

	};
}


//Eerste actie: button laad data
button.onclick = function () {
	laadElement.classList.add('show'); //weergeven
	section.innerHTML = ""; //html leeg halen
	contentInladen(); //functie hierboven uitvoeren
}
