var iteration = 0;
var naamVirus = document.getElementById('naam');
var bron = document.getElementById('bronTekst');
var doden = document.getElementById('dodenTekst');
var locatie = document.getElementById('locatieTekst');
var periode = document.getElementById('periodeTekst');
var tekst = document.getElementById('tekst');


function makeActive(id) {
  //Zorg dat de h1 groen blijft net zoals de span
  document.getElementById('naam').classList.add("groen");
  document.getElementById('title').style.marginLeft = "7.5%";
  document.getElementById("tekst").classList.remove("tekst")
  document.getElementById("tekst").classList.add("zichtbaar")

  var info = document.querySelectorAll(".info");
  [].forEach.call(info, function(el) {
      el.classList.add("zichtbaar");
  });

  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
      el.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  if (id == "1") {
    naamVirus.innerHTML = "Spaanse griep";
    bron.innerHTML = "Onbekend";
    doden.innerHTML = "50 - 100 miljoen";
    locatie.innerHTML = "Hele wereld";
    periode.innerHTML = "1918";
    tekst.innerHTML = "klik links"
    iteration = 1;
  }

  else if (id == "2") {
    naamVirus.innerHTML = "De Pest";
    bron.innerHTML = "Rat";
    doden.innerHTML = "200 miljoen";
    locatie.innerHTML = "Mexico";
    periode.innerHTML = "1924";
    tekst.innerHTML = "klik links"
    iteration = 2;

  }

  else if (id == "3") {
    naamVirus.innerHTML = "Papengaaienziekte";
    bron.innerHTML = "Vogel";
    doden.innerHTML = "Onbekend";
    locatie.innerHTML = "Europa en Amerika";
    periode.innerHTML = "1929";
    tekst.innerHTML = "klik links"
    iteration = 3;
  }

  else if (id == "4") {
    naamVirus.innerHTML = "Legionella"
    bron.innerHTML = "Bacterie";
    doden.innerHTML = "30 - 60";
    locatie.innerHTML = "Amerika";
    periode.innerHTML = "1976";
    tekst.innerHTML = "klik links"
    iteration = 4;
  }

  else if (id == "5") {
    naamVirus.innerHTML = "Hiv"
    bron.innerHTML = "Chimpansee";
    doden.innerHTML = "32 miljoen";
    locatie.innerHTML = "Onbekend";
    periode.innerHTML = "1980";
    tekst.innerHTML = "klik links"
    iteration = 5;
  }

  else if (id == "6") {
    naamVirus.innerHTML = "SARS"
    bron.innerHTML = "Vleermuis";
    doden.innerHTML = "774";
    locatie.innerHTML = "China";
    periode.innerHTML = "2002";
    tekst.innerHTML = "klik links"
    iteration = 6;
  }

  else if (id == "7") {
    naamVirus.innerHTML = "Ebola"
    bron.innerHTML = "Vleermuis";
    doden.innerHTML = "11.000";
    locatie.innerHTML = "Zuidoost-Guinee";
    periode.innerHTML = "2013";
    tekst.innerHTML = "klik links"
    iteration = 7;
  }
}

//Code om de teksten aan te passen
document.getElementById("bron").addEventListener("click", changeBron);
document.getElementById("doden").addEventListener("click", changeDoden);
document.getElementById("locatie").addEventListener("click", changeLocatie);
document.getElementById("periode").addEventListener("click", changePeriode);

function changeBron() {
  document.getElementById('tekst').innerHTML = "Aanvankelijk werd gedacht dat een bacterie de boosdoener was. Honigsbaum beschrijft hoe koppige wetenschappers, overtuigd van het ‘bacteriële paradigma’, er alles aan deden om die aanname bevestigd te zien. In werkelijkheid is influenza A een virale infectie. Dat werd pas definitief bewezen toen in 1933 een geïnfecteerde fret op een laborant nieste, waarop deze ziek werd. Onder de microscoop werd het virus H1N1 niet zichtbaar tot in de jaren veertig En pas in 2005 brachten wetenschappers het hele genoom ervan in kaart en bleek dat de oorsprong waarschijnlijk in vogelpopulaties lag.";
}

function changeDoden() {
  if(iteration == 1){
  document.getElementById('tekst').innerHTML = "De onbekende ziekte zou al snel bekendstaan als de Spaanse griep en zou uiteindelijk aan  675.000 Amerikanen het leven kosten.  Wereldwijd lopen de schattingen van het aantal slachtoffers op tot tussen de 50 en 100 miljoen, waarmee het de dodelijkste epidemie uit de geschiedenis was.";
}
  else if (iteration == 2) {
    document.getElementById('tekst').innerHTML ="doden 2"
  }

  else if (iteration == 3) {
    document.getElementById('tekst').innerHTML ="doden 3"
  }

  else if (iteration == 4) {
    document.getElementById('tekst').innerHTML ="doden 4"
  }

  else if (iteration == 5) {
    document.getElementById('tekst').innerHTML ="doden 5"
  }

  else if (iteration == 6) {
    document.getElementById('tekst').innerHTML ="doden 6"
  }

  else if (iteration == 7) {
    document.getElementById('tekst').innerHTML ="doden 7"
  }
}

function changePeriode() {
  document.getElementById('tekst').innerHTML = "Waar de uitbraak van die oorlogswinter precies ontstond is onbekend, maar waarschijnlijk werd het virus verspreid door troepen die terugkeerden uit het hart van de oorlog. Ecologisch gezien waren de loopgraven in Noord-Frankrijk een gigantisch experiment, waar massa’s mannen uit alle windstreken – en daarmee allerlei soorten immuunsystemen – samenkwamen.";
}


function changeLocatie() {
  document.getElementById('tekst').innerHTML = "De reis begint in 1918, in een legerkamp in Massachusetts, waar duizenden jonge soldaten worden voorbereid op een overzeese strijd. Het is koud in het kamp, vies en overvol, en net als in het door oorlog verwoeste Europa, waart er een luchtweginfectie rond onder de jonge mannen. Hoge koorts, extreme benauwdheid en blauwgekleurde lippen zijn enkele van de symptomen. Een medicijn is er niet.";
}

//functie om de footer te expanden
function expand() {
  var height = document.getElementById('footer').style.height;
  console.log(height);

  if (height == "200px") {
    document.getElementById('footer').style.height = "100px";
    document.getElementById('expand').style.marginBottom = "100px";
    document.getElementById('arrow').style.transform = "rotate(0deg)"
    var test = document.querySelectorAll(".list");
    [].forEach.call(test, function(el) {
        el.classList.remove("zichtbaar");
    });
    document.getElementById("main").classList.remove("dim");
  }

  else  {
    document.getElementById('footer').style.height = "200px";
    document.getElementById('expand').style.marginBottom = "200px";
    document.getElementById('arrow').style.transform = "rotate(180deg)"

    console.log("open")
    var test = document.querySelectorAll(".list");
    [].forEach.call(test, function(el) {
        el.classList.add("zichtbaar");
    });
    document.getElementById("main").classList.add("dim");
  }

}
