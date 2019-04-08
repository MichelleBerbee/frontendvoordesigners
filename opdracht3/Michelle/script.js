var requestURL = 'https://open.data.amsterdam.nl/Attracties.json';
var laadElement = document.querySelector('span'); //gifje selecteren uit html
var button = document.querySelector('button'); //beginbuton

function showData(jsonObj) {
	var data = jsonObj;

	for (var i = 0; i < data.length; i++) {
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

		var location = document.createElement('p')
		location.textContent = data[i].location.adress;

		var button = document.createElement('button');
		button.textContent = 'Lees meer';
		button.classList.toggle('show')

		var beschrijvingContainter = document.createElement('section')
		beschrijvingContainter.classList.add("beschrijvingContainter")
		beschrijvingContainter.appendChild(details)


		container.appendChild(titel);
		container.appendChild(location);
		container.appendChild(foto);
		container.appendChild(details);
		container.appendChild(button);
		document.querySelector('section').appendChild(container);
	}
	event();
}

//meer informatie laten zien
		function event() {
			var buttons = document.querySelector('button')
			for (var button of buttons) {
				button.addEventListener('click', function () {
					var parent = this.parentElement
				parent.classList.toggle('active')
			})
			}
		}

function contentInladen() { //data uit database halen
	var request = new XMLHttpRequest(); //maak een nieuw request
	request.open('GET', requestURL); //open dit request met de juiste variabele, requestURL
	request.responseType = 'json'; //json omzetten naar een jsobject
	request.send(); //verstuur het verzoek naar de server
	request.addEventListener("load", function () { //gifje 5sec laten staan

		setTimeout(function () {
			laadElement.classList.remove('show'); //gifje laten zien
			var datainhoud = request.response; //de response slaan we op in de variabele
			showData(datainhoud); //functie die zorgt dat de section word gevult met juiste activiteiten
		}, 4000) //na 4seconden stopt de gif en laadt hij de content
	});

	request.onerror = function () {
	}
}

//Eerste actie: button laad data
button.onclick = function () {
	laadElement.classList.add('show'); //weergeven
	section.innerHTML = ""; //html leeg halen
	contentInladen(); //functie hierboven uitvoeren
}

//code opdracht 1
var buttons = document.querySelectorAll("button")

for(let i = 0; i < buttons.length; i++){ //door de rij heen
  buttons[i].addEventListener("click",function(e){
    e.preventDefault() //niet opnieuw laden

  var section = e.target.parentNode.nextElementSibling
    section.classList.toggle("active")
  })
}
