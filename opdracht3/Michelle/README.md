Frontend voor designers - opdracht 3
Activiteiten in Amsterdam

Url van de opdracht: https://michelleberbee.github.io/frontendvoordesigners/opdracht3/Michelle/
Json link: https://fonts.googleapis.com/css?family=Faster+One

Ik heb een site gemaakt waar je alle activiteiten kan vinden die er in
Amsterdam te doen zijn.
Ik ga in deze readme uitleggen wat en hoe ik het heb gemaakt.
In het begin haalt de javascript de hele section leeg waardoor alleen de knop zichtbaar is.
Als je op de beginknop klikt dan speelt hij een gifje af en na 4 seconden wordt die vervangen
door alle elemnten die ik heb aangemaakt.
De elementen die ik heb aangemaakt en dus weergegeven worden in de section zijn:
- titel
- Locatie
- afbeelding
- Details ( die worden weergegeven in een -Knop )
- Knop

De details van de activiteiten heb ik weggestopt achter een knop die ik heb aangemaakt in javascript. Dit lukte mij in het begin telkens niet maar uiteindelijk is het mij wel gelukt.
Ik heb de details (stukje tekst wat ik ophaal uit de api wat over de activiteit gaat) gekopeld
aan de aangemaakte knop en daarna heb ik met css de details laten weergeven en verdwijnen met display none en block.
De details onder de knop zetten doe ik als volgt:

button.info = details; //details koppelen aan button
button.onclick = function () { //als er geklikt wordt voert hij futction uit
  this.info.classList.toggle('show'); //als je op knop klikt gaat hij details een class show geven.
  de class: show zet ik dan op display block zodat het zichtbaar wordt

  In de function: showData haal ik alle elementen op uit de json en creeer ik de elementen
  die ik vervolgens style in de css.
  Hoe ik een element creeer +comments:  

  var details = document.createElement('p'); //het creeren van het element
  details.textContent = data[i].details.nl.shortdescription; //zo staat het element weggestopt in de json
  details.classList.add('details'); //details als class toevoegen

Ik heb de site vormgegeven in zwart, rood en wit wat bij Amsterdam past. Ik
heb de sections een maximale hoogte gegeven en een grid gebruikt voor de sections.
Rechtsonderin heb ik nog een knop toegevoegd waarmee je weer helemaal terug kan keren naar boven.

De html en css gingen vlekkeloos ik heb alleen nog wel moeite gehad met de javascript want
de knoppen en bijbehorende acties wilden niet meteen werken.

Ook heb ik wat errors maar dat komt omdat sommige informatie niet uit de json kan worden gehaald
omdat die er niet in staan. 

Uiteindelijk ben ik tevreden met het resultaat!
Bekijk de uitwerking hier: https://michelleberbee.github.io/frontendvoordesigners/opdracht3/Michelle/

Michelle Berbee
