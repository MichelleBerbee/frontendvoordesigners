var requestURL = 'https://open.data.amsterdam.nl/Attracties.json';
 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

request.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    showData(request.response)
  }
}

function showData(data) {
  console.log(data);
  for(var item of data) {
    console.log(item.details.nl)

    var container = document.createElement('section')

    var filmtitel = document.createElement('h2')
    filmtitel.textContent = item.title

    var location = document.createElement('p')
    location.textContent=item.location.adress

    var foto = document.createElement('img')
    foto.src=item.media[0].url

    var details = document.createElement('p')
    details.textContent=item.details.nl.shortdescription

    container.appendChild(filmtitel)
    container.appendChild(location)
    container.appendChild(foto)
    container.appendChild(details)

    document.querySelector('section').appendChild(container)
  }

}
