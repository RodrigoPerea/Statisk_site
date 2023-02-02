const mineSange = ["sang1", "sang2", "sang3", "sang4"];

mineSange.forEach(playListe);

function playListe(enSang) {
  console.log(enSang);
  document.querySelector("main").innerHTML += `<p>${enSang}</p>`;
}

/* øvelse 2 */
const minFiskefabrik = {
  byggeår: "2004",
  vinduer: "47",
  ansatte: "50 prs",
  produkter: ["sej", "rejer", "torsk", "laks"],
};

/* øvelse 3 */

/* Mit array af objekter */
/* har mit skabelon/template i html (opskrift på hvordan det skla se ud i html.*/
const bands = [
  {
    band_name: "Rodrigo and the donkeys",
    location: "Berlin",
    members: ["rodrigo", "steffen", "karl"],
  },
  {
    band: "Obays",
    location: "Copenhagen",
    members: ["steffen", "emil", "lone", "ludvig"],
  },
  {
    band: "Lillipop",
    location: "Madrid",
    members: ["peter", "pedro"],
  },
];

/* fortl hvilket skabelon de rksla bruges i html */
const skabelon = document.querySelector("#bandTemplate").content;
console.log(skabelon);

/* lav loopet */
/* lopper gennem mit array, og hver gang kalder jeg funktionen */
bands.forEach(visBand);
/* ind ei funktionen tager jeg ét band af gangen, og putter indholdet ind i det som er i skabelonet */
function visBand(band) {
  console.log(band);
  /* lav en clon af skabelonen */
  /* kloner skabelonet, da der skal være en ny clon til hvert nyt band */
  const klon = skabelon.cloneNode(true);
  /* fikse hvert element ud med en selector */
  klon.querySelector("h1").textContent = band.band_name;
  klon.querySelector("h2").textContent = band.location;
  klon.querySelector("p").textContent = band.members;
  /* Næste: for hver gang den finder et nyt band navn(h1), tager den band navnet og putter ind i h1 og apend clonen til main */
  document.querySelector("main").appendChild(klon);
  /* når indholdet er ændret, apåender jeg den til den container jeg har valgt at lave ud ei html dokumentet  */
}
