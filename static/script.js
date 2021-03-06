var iteration = 0;
var naamVirus = document.getElementById('naam');
var bron = document.getElementById('bronTekst');
var doden = document.getElementById('dodenTekst');
var locatie = document.getElementById('locatieTekst');
var periode = document.getElementById('periodeTekst');
var tekst = document.getElementById('tekst');

function next() {
  if (iteration == 7 || iteration == 0) {

    }

    else {
      makeActive(iteration+1)
    }
}

function previous() {
  if (iteration == 1 || iteration == 0) {
    }

    else {
      makeActive(iteration-1)
    }
}

function makeActive(id) {
  //Zorg dat de h1 groen blijft net zoals de span
  document.getElementById('naam').classList.add("groen");
  document.getElementById('title').style.marginLeft = "7.5%";
  document.getElementById('callToAction').style.display = "none";
  document.getElementById("tekst").classList.remove("tekst")
  document.getElementById("tekst").classList.add("zichtbaar")
  document.getElementById('next').style.display = "block";
  document.getElementById('previous').style.display = "block";

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
    bron.innerHTML = "Vogel";
    doden.innerHTML = "50 - 100 miljoen";
    locatie.innerHTML = "Onbekend";
    periode.innerHTML = "1918";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 1;

  }

  else if (id == "2") {
    naamVirus.innerHTML = "De Pest";
    bron.innerHTML = "Rat";
    doden.innerHTML = "30";
    locatie.innerHTML = "Los Angeles";
    periode.innerHTML = "1924";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 2;

  }

  else if (id == "3") {
    naamVirus.innerHTML = "Papengaaienziekte";
    bron.innerHTML = "Vogel";
    doden.innerHTML = "Onbekend";
    locatie.innerHTML = "Onbekend";
    periode.innerHTML = "1929";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 3;
  }

  else if (id == "4") {
    naamVirus.innerHTML = "Legionella"
    bron.innerHTML = "Bacterie";
    doden.innerHTML = "300 - 400";
    locatie.innerHTML = "Amerika";
    periode.innerHTML = "1976";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 4;
  }

  else if (id == "5") {
    naamVirus.innerHTML = "Hiv"
    bron.innerHTML = "Chimpansee";
    doden.innerHTML = "32 miljoen";
    locatie.innerHTML = "Afrika";
    periode.innerHTML = "1980";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 5;
  }

  else if (id == "6") {
    naamVirus.innerHTML = "SARS"
    bron.innerHTML = "Vleermuis";
    doden.innerHTML = "774";
    locatie.innerHTML = "China";
    periode.innerHTML = "2003";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 6;
  }

  else if (id == "7") {
    naamVirus.innerHTML = "Ebola"
    bron.innerHTML = "Vleermuis";
    doden.innerHTML = "11.000";
    locatie.innerHTML = "Zuidoost-Guinee";
    periode.innerHTML = "2013";
    tekst.innerHTML = "Klik op een van de onderwerpen links voor meer informatie ..."
    iteration = 7;
  }
}

//Code om de teksten aan te passen
document.getElementById("bron").addEventListener("click", changeBron);
document.getElementById("doden").addEventListener("click", changeDoden);
document.getElementById("locatie").addEventListener("click", changeLocatie);
document.getElementById("periode").addEventListener("click", changePeriode);
document.getElementById("lesson").addEventListener("click", changeLesson);
// Pas de tekst aan bij bron
function changeBron() {

  if(iteration == 1){
  document.getElementById('tekst').innerHTML = "Aanvankelijk werd gedacht dat een bacterie de boosdoener was. Honigsbaum beschrijft hoe koppige wetenschappers, overtuigd van het ‘bacteriële paradigma’, er alles aan deden om die aanname bevestigd te zien. In werkelijkheid is influenza A een virale infectie. Dat werd pas definitief bewezen toen in 1933 een geïnfecteerde fret op een laborant nieste, waarop deze ziek werd. Onder de microscoop werd het virus H1N1 niet zichtbaar tot in de jaren veertig En pas in 2005 brachten wetenschappers het hele genoom ervan in kaart en bleek dat de oorsprong waarschijnlijk in vogelpopulaties lag.";


}
  else if (iteration == 2) {
    document.getElementById('tekst').innerHTML ="De verantwoordelijke, mythologische bacterie, ‘Y. pestis’, die door de geschiedenis misschien wel 200 miljoen slachtoffers maakte, sluimert meestal onder wilde knaagdieren, zoals ratten, zonder schade aan te richten. Als ratten echter ziek worden en in contact komen met mensen bestaat de kans op overdracht, via vlooien."


  }

  else if (iteration == 3) {
    document.getElementById('tekst').innerHTML ="In de jaren dertig vinden exotische vogels wereldwijd gretig aftrek. Voor weduwen en verveelde huisvrouwen zijn parkieten en kanaries de tv’s van weleer. Vanuit tropische oorden worden honderdduizenden vogels verscheept naar rijke landen. Dat de gevederde vrienden een bacterie met zich meedragen die longontsteking veroorzaakt, vermoedt niemand."


  }

  else if (iteration == 4) {
    document.getElementById('tekst').innerHTML ="Legionella pneumophila, zoals de bacterie die hen ziek maakte zou gaan heten, houdt zich op in water, waarin andere organismen leven, waarop hij kan parasiteren. In natuurlijke toestanden bereikt water meestal geen temperaturen waarin bacteriën zich snel vermenigvuldigen, maar door de mens gemaakte omgevingen zijn anders. Hotels, ziekenhuizen en andere grote, stedelijke gebouwen hebben voorzieningen die water op gebruikstemperatuur houden, en daarmee een ideale omgeving voor legionella bieden."


  }

  else if (iteration == 5) {
    document.getElementById('tekst').innerHTML ="Het aidsvirus komt oorspronkelijk voor bij apen. Het virus is bij de mens terechtgekomen door een toegenomen contact tussen mensen en apen: door de jacht op en de handel in apen, het kappen van het Afrikaanse regenwoud en de kolonisatie van Afrika. Hiv is een virus en heeft dus gastheren nodig. Het aidsvirus stapte van de ene gastheer (de aap) over naar een andere gastheer, de mens, en evolueerde verder"


  }

  else if (iteration == 6) {
    document.getElementById('tekst').innerHTML ="Na onderzoek te doen op de chineze markt blijkt dat civetkatten dragers van het SARS virus zijn. In 2005 blijkt echter dat civetkatten slechts tussenstations waren en vleermuizen de echte overdrager."


  }

  else if (iteration == 7) {
    document.getElementById('tekst').innerHTML ="Net als SARS komt ebola ook van vleermuizen te komen, van de langstaartvreemuis."


  }
}

// pas tekst aan bij doden
function changeDoden() {
  if(iteration == 1){
  document.getElementById('tekst').innerHTML = "De onbekende ziekte zou al snel bekendstaan als de Spaanse griep en zou uiteindelijk aan  675.000 Amerikanen het leven kosten.  Wereldwijd lopen de schattingen van het aantal slachtoffers op tot tussen de 50 en 100 miljoen, waarmee het de dodelijkste epidemie uit de geschiedenis was.";


}
  else if (iteration == 2) {
    document.getElementById('tekst').innerHTML ="De pest duikt nog steeds af en toe op in mensen, maar kan nu bestreden worden met antibiotica. Voor de mensen in het arme en dichtbevolkte Mexicaanse kwartier waren die opties er niet. Met strenge – en naar huidige maatstaven ronduit racistische – quarantainemaatregelen werd de uitbraak bedwongen. Uiteindelijk zijn er maar 30 doden gevallen"


  }

  else if (iteration == 3) {
    document.getElementById('tekst').innerHTML ="De ziekte is voor mensen niet ongevaarlijk en kan fataal verlopen in zeldzame gevallen (<1%). De overdracht verloopt aerogeen en de incubatieperiode is 1 tot 4 weken. De kans is dus klein dat je sterf en er zijn geen sterftegevallen bekend."


  }

  else if (iteration == 4) {
    document.getElementById('tekst').innerHTML ="Een legionella-infectie hoeft niet per se levensbedreigend te zijn, maar kan ook lichte griepverschijnselen veroorzaken, de zogeheten Pontiackoorts. De beruchte veteranenziekte kent soms echter wel degelijk een dodelijke afloop. Vooral rokers, ouderen en mensen met een verminderde weerstand zijn het slachtoffer van legionellose; tussen de 5 en de 10 procent van de patiënten overlijdt eraan."


  }

  else if (iteration == 5) {
    document.getElementById('tekst').innerHTML ="Aan het einde van de eeuw waren er wereldwijd 14 miljoen hiv-besmettingen en inmiddels zijn het er zo’n 75 miljoen,  waarvan de meeste op het Afrikaanse continent. Ongeveer 32 miljoen mensen zijn overleden aan HIV"


  }

  else if (iteration == 6) {
    document.getElementById('tekst').innerHTML ="Een honger naar exotische eiwitbronnen en steeds maar meer en sneller vliegvervoer hadden SARS de kans gegeven om wereldwijd ongeveer achtduizend mensen te besmetten en bijna achthonderd te doden."


  }

  else if (iteration == 7) {
    document.getElementById('tekst').innerHTML ="Ebola zou bijna 30.000 mensen treffen, en aan 11.000 het leven kosten."


  }
}

// pas tekst aan bij periode
function changePeriode() {
  if(iteration == 1){
    document.getElementById('tekst').innerHTML = "De reis begint in 1918, in een legerkamp in Massachusetts, waar duizenden jonge soldaten worden voorbereid op een overzeese strijd. Het is koud in het kamp, vies en overvol, en net als in het door oorlog verwoeste Europa, waart er een luchtweginfectie rond onder de jonge mannen. Hoge koorts, extreme benauwdheid en blauwgekleurde lippen zijn enkele van de symptomen. Een medicijn is er niet.";


}
  else if (iteration == 2) {
    document.getElementById('tekst').innerHTML ="De 1924 Los Angeles longpest uitbraak begon 30 oktober 1924, en was volledig verklaard die op 13 november 1924. Het was de eerste keer dat pest in Zuid-Californië was ontstaan. Eerder had de pest uitbraken in gerezen San Francisco en de nabijgelegen Oakland het markeren van de eerste keer plaag was in Californië gekomen."



  }

  else if (iteration == 3) {
    document.getElementById('tekst').innerHTML ="De pappengaaienziekte duikt voor het eerst op in 1929, en is nog steeds niet volledig verdwenen. Elk jaar zijn er in Nederland nog 40 tot 80 meldingen van het virus. "



  }

  else if (iteration == 4) {
    document.getElementById('tekst').innerHTML ="De eerste gerapporteerde uitbraak dateert van 1976, toen er in Philadelphia een massale epidemie van longontsteking voordeed. Na onderzoek kon men deze uitbraak relateren aan het voorkomen van bepaalde bacteriën. Deze bacteriën werden Legionella pneumophila genoemd. Latere uitbraken vinden plaats in 1968, 2001 en 2019"


  }

  else if (iteration == 5) {
    document.getElementById('tekst').innerHTML ="De geschiedenis van het aidsvirus kun je op talloze plekken laten beginnen – bij chimpansees in de binnenlanden van Kameroen, bijvoorbeeld, of bij de vermeende ‘patient zero’ Gaetan Dugas. Honingbaum begint in december 1980, in Los Angeles, waar de 33-jarige kunstenaar Michael op de eerste hulp belandt."


  }

  else if (iteration == 6) {
    document.getElementById('tekst').innerHTML ="In februari 2003 vangt de WHO signalen op van een ongebruikelijke uitbraak van luchtweginfecties in de Chinese miljoenenstad Guangzhou.De veroorzaker blijkt een coronavirus  dat nooit eerder in mensen werd gezien. Het is zeer besmettelijk en wetenschappers en zorgmedewerkers zijn huiverig om te werken met besmette bloedmonsters en patiënten. Vleermuizen worden ook nu genoemd als mogelijke gastheren  van het huidige coronavirus SARS-CoV-2, dat zich onderscheidt van SARS doordat het met zijn koninklijke spikes beter hecht aan menselijke cellen."


  }

  else if (iteration == 7) {
    document.getElementById('tekst').innerHTML ="In december 2013 verzamelt een groepje kinderen zich rond een holle boom in Meliandou, een gehucht in Zuidoost-Guinee. Ze prikken met stokken in de holte om de langstaartvleermuizen die erin nestelen uit te drijven. Het vlees van de mollige beestjes is een belangrijke eiwitbron voor de dorpelingen. Kort hierop krijgt een van de kinderen, de tweejarige Emile, hoge koorts, met overgeven en diarree. Een paar dagen later is hij dood. Daarna volgen Emiles moeder en zijn zusje, die een week later sterven."


  }
}

// pas tekst aan bij locatie
function changeLocatie() {
  if(iteration == 1){
    document.getElementById('tekst').innerHTML = "Waar de uitbraak van die oorlogswinter precies ontstond is onbekend, maar waarschijnlijk werd het virus verspreid door troepen die terugkeerden uit het hart van de oorlog. Ecologisch gezien waren de loopgraven in Noord-Frankrijk een gigantisch experiment, waar massa’s mannen uit alle windstreken – en daarmee allerlei soorten immuunsystemen – samenkwamen.";


}
  else if (iteration == 2) {
    document.getElementById('tekst').innerHTML ="De pest duikt op in een Mexicaanse immigrantenwijk in Los Angeles. Het virus heeft zich niet verder verspreid"



  }

  else if (iteration == 3) {
    document.getElementById('tekst').innerHTML ="Waar de ziekte is ontstaan is niet duidelijk, maar in 1929 worden overal ter wereld gevallen van de pappengaaienziekte gemeld"



  }

  else if (iteration == 4) {
    document.getElementById('tekst').innerHTML ="Als in de zomer van 1976 duizenden oorlogsveteranen samenkomen voor een vierdaagse conferentie in het chicste hotel van Philadelphia. Ze scholen samen in de enorme balzalen en op de terrassen van het hotel, waar ze eten, drinken en keuvelen. Een week later zijn zes veteranen in de buurt van Philadelphia ernstig ziek en één dood. Ook in de rest van het land blijken bezoekers van de conferentie in het ziekenhuis te liggen met – je raadt het al – longontsteking."


  }

  else if (iteration == 5) {
    document.getElementById('tekst').innerHTML ="locatie 5"


  }

  else if (iteration == 6) {
    document.getElementById('tekst').innerHTML ="Het SARS virus is begonnen in de Chinese miljoenenstad Guangzhou, op de exotische dierenmarkt. Hier dragen dieren virussen op elkaar over maar ook op de mensen die op de markt aanwezig zijn."


  }

  else if (iteration == 7) {
    document.getElementById('tekst').innerHTML ="In december 2013 begint het virus in Guinee, al snel verspreid het naar omliggende landen. Een paar maanden na de uitbraak maakt de WHO het nieuws bekend. Maar een uitbraak in de afgelegen bossen van Guinee lijkt de ambtenaren niet iets om zich heel druk over te maken. Als er enkele gevallen worden gemeld van zieken die met het vliegtuig richting onder meer de VS reisden, wordt de wereld wakker. Uiteindelijk zouden internationale hulpbronnen alsnog het verschil maken. Maar het einde van de pandemie kwam pas ruim een hels jaar later."


  }
}

// pas tekst bij les aantal
function changeLesson() {
  if(iteration == 1){
    document.getElementById('tekst').innerHTML = "De Spaanse griep liet vooral zien hoe nauw de pandemie samenhing met de oorlog, wat vaker het geval is: ‘Al sinds Perikles  in 430 v.C. de Atheners de bezetting van de Spartanen liet uitzitten [waarbij de pest uitbrak], zijn oorlogen de voorgangers van dodelijke infectieziekten."


}
  else if (iteration == 2) {
    document.getElementById('tekst').innerHTML = "De Pest liet onderzoekers inszien hoe nauw infectieziekten samenhangen met onze relatie tot dieren. Dieren kunnen een virus dragen zonder schade aan te richten, als ze echter ziek worden en in contact komen met mensen bestaat de kans op overdracht, via vlooien. Tegenwoordig wordt de gezondheid van knaagdierpopulaties gemonitord. "



  }

  else if (iteration == 3) {
    document.getElementById('tekst').innerHTML = "Vogels in de vrije natuur vormen nauwelijks een risico voor mensen. Parasieten die in wilde populaties rondgaan, zijn juist goed voor het evenwicht. Problemen ontstaan pas als mensen die biologische balans verstoren, door vogels opeen te pakken in krappe kratten om te verschepen. En dat geldt natuurlijk niet alleen voor vogels. De papegaaienziekte zou een les zijn voor de globaliserende toekomst. Overbevolking, vliegverkeer, internationale handel en de bio-industrie maken dit soort overdrachten van dier naar mens steeds gewoner, iets waar we vandaag in onze goed geïnformeerde thuisquarantaines opnieuw van doordrongen raken."



  }

  else if (iteration == 4) {
    document.getElementById('tekst').innerHTML = "In natuurlijke toestanden bereikt water meestal geen temperaturen waarin bacteriën zich snel vermenigvuldigen, maar door de mens gemaakte omgevingen zijn anders. Hotels, ziekenhuizen en andere grote, stedelijke gebouwen hebben voorzieningen die water op gebruikstemperatuur houden, en daarmee een ideale omgeving voor legionella bieden. Het is een klassiek voorbeeld, benadrukt Honigsbaum, van hoe nieuwe technologieën en veranderingen aan de gebouwde omgeving – ontworpen om hygiëne te bevorderen, nota bene – constant nieuwe gezondheidsrisico’s met zich meebrengen."


  }

  else if (iteration == 5) {
    document.getElementById('tekst').innerHTML = "Aanvankelijk, reageert het publiek onverschillig op de nieuwe ziekte HIV. Deels uit onwetendheid en deels uit het al snel hardnekkige vooroordeel dat aids alleen homo’s treft. President Ronald Reagan weigert de eerste jaren van de epidemie het A-woord te gebruiken en onthoudt aids-onderzoekers hun subsidies. De les die we hieruit gehaald hebben is dat goede informatie belangrijk is om een virus te bestrijden. Wees als overheid open over de status van de epidemie en preventiemogelijkheden. Werk samen met sleutelfiguren binnen gemeenschappen om die informatie iedereen te laten bereiken."


  }

  else if (iteration == 6) {
    document.getElementById('tekst').innerHTML = "Door SARS zijn onderzoekers erachter gekomen dat vleermuizen een resevoir zijn voor virussen, het eten van vleermuizen is dan ook een tijdje verboden geweest in China. Ook kwam SARS bekend te staan als de eerste ‘jetsetziekte’ van het nieuwe millennium, refererend aan de snelheid waarmee het zich door Azië en van daar naar Canada had verspreid door mee te liften in vliegtuigen."


  }

  else if (iteration == 7) {
    document.getElementById('tekst').innerHTML = "Ebola confronteerde wetenschappers ook met de grote onvoorspelbaarheid van dit soort virussen. Hoe kon Zaïre ebola bijvoorbeeld helemaal in Guinee belanden? Gedacht wordt dat fruitvleermuizen de dader zijn.  Maar zeker is dat niet."


  }
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
