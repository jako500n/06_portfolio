window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  // Når der trykkes på højre, slides der til højre //
  naesteKnap_01.addEventListener("click", naesteBillede_01);

  // Når der trykkes på venstre, slides der til venstre //
  sidsteKnap_01.addEventListener("click", sidsteBillede_01);

  // Når der trykkes på højre, slides der til højre //
  naesteKnap_02.addEventListener("click", naesteBillede_02);

  // Når der trykkes på venstre, slides der til venstre //
  sidsteKnap_02.addEventListener("click", sidsteBillede_02);

  /* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
  btn.addEventListener("click", toggleMenu);
}

// Først vil alle variabler nedskrives i form af const (gør det nemmere at arbejde med) //

const track_01 = document.querySelector(".carousel_track_01");
const slides_01 = Array.from(track_01.children);
const naesteKnap_01 = document.querySelector(".carousel_knap_hoejre_01");
const sidsteKnap_01 = document.querySelector(".carousel_knap_venstre_01");
const indikatorNav_01 = document.querySelector(".carousel_nav_01");
const indikator_01 = Array.from(indikatorNav_01.children);

const slideWidth_01 = slides_01[0].getBoundingClientRect().width;
console.log(slideWidth_01);

// Arrangér slides, sådan så de står ved siden af hinanden //
slides_01[0].style.left = slideWidth_01 * 0 + "px";
slides_01[1].style.left = slideWidth_01 * 1 + "px";
slides_01[2].style.left = slideWidth_01 * 2 + "px";
// Hvis man vil gøre dette på en automatisk metode, sådan så man kan tilføje eller
// fjerne billeder som det lystrer, uden at man skal redigere i JavaScript manuelt,
// kan man bruge følgende; slides.forEach((slide, index)=> {slide.style.left = slideWidth * index + "px";});

const flytTilSlide_01 = (track_01, nuvaerendeSlide_01, trykSlide_01) => {
  track_01.style.transform = "translateX(-" + trykSlide_01.style.left + ")";
  nuvaerendeSlide_01.classList.remove("nuvaerende_slide_01");
  trykSlide_01.classList.add("nuvaerende_slide_01");
};

const opdaterKnap_01 = (nuvaerendeKnap_01, trykKnap_01) => {
  // Her fjernes den nuværende class på knappen og giver den videre til den, vi har trykket på //
  nuvaerendeKnap_01.classList.remove("nuvaerende_slide_01");
  trykKnap_01.classList.add("nuvaerende_slide_01");
};

function naesteBillede_01() {
  console.log("naesteBillede_01");

  // Her laver vi en const, der leder efter det nuværende slide i selve
  // listepunktet carousel_slide, hvor alle billeder er //
  const nuvaerendeSlide_01 = track_01.querySelector(".nuvaerende_slide_01");
  // Her laver vi en const, der går ind og finder næste "sibling", altså det næste billede i rækkefølgen.
  const naesteSlide_01 = nuvaerendeSlide_01.nextElementSibling;

  // Her gør vi, at når vi klikker på næste billede til højre, vil knappernes næste søskende følge med,
  // og på denne måde påvirkes de af opdaterKnap, som fjerner og giver class nuvaerende_slide //
  const nuvaerendeKnap_01 = indikatorNav_01.querySelector(
    ".nuvaerende_slide_01"
  );
  const naesteKnap_01 = nuvaerendeKnap_01.nextElementSibling;

  // Nu skal vi gøre, så vi rykker til næste slide //

  flytTilSlide_01(track_01, nuvaerendeSlide_01, naesteSlide_01);
  // Hver gang vi klikker, ændrer nuvaerendeSlide sig. Værdien evalueres og puttes ind
  // i funktionen. Derefter evalueres naesteSlide og sættes i funktionen.
  // HVAD END der er i naesteSlide sættes i og filtreres gennem TrykSlide.

  opdaterKnap_01(nuvaerendeKnap_01, naesteKnap_01);
}

function sidsteBillede_01() {
  console.log("sidsteBillede_01");

  // Her laver vi en const, der leder efter det nuværende slide i selve
  // listepunktet carousel_slide, hvor alle billeder er //
  const nuvaerendeSlide_01 = track_01.querySelector(".nuvaerende_slide_01");
  // Her laver vi en const, der går ind og finder sidste "sibling", altså det sidste billede i rækkefølgen.
  const sidsteSlide_01 = nuvaerendeSlide_01.previousElementSibling;

  // Her gør vi, at når vi klikker på næste billede til venstre, vil knappernes sidste søskende følge med,
  // og på denne måde påvirkes de af opdaterKnap, som fjerner og giver class nuvaerende_slide //
  const nuvaerendeKnap_01 = indikatorNav_01.querySelector(
    ".nuvaerende_slide_01"
  );
  const sidsteKnap_01 = nuvaerendeKnap_01.previousElementSibling;

  // Nu skal vi gøre, så vi rykker til sidste slide //

  flytTilSlide_01(track_01, nuvaerendeSlide_01, sidsteSlide_01);
  // Hver gang vi klikker, ændrer nuvaerendeSlide sig. Værdien evalueres og puttes ind
  // i funktionen. Derefter evalueres sidsteSlide og sættes i funktionen.
  // HVAD END der er i sidsteSlide sættes i og filtreres gennem TrykSlide.

  opdaterKnap_01(nuvaerendeKnap_01, sidsteKnap_01);
}

// Når der trykkes på nav-indikatoreren, slides der til denne //
indikatorNav_01.addEventListener("click", (e) => {
  // Her finder vi ud af, hvilken indikator der er trykket på //
  const trykKnap_01 = e.target.closest("button");

  // Hvis vi klikker på noget, som ikke er vores indikatorknap, så stopper funktionen //
  // Hvis vi klikker på noget, som er en del af indikatorknappen, så forbliver funktionen //
  if (!trykKnap_01) return;

  // Vi vil gerne vide, hvilket slide vi er på, og hvilken indikatorknap vi er på //
  const nuvaerendeSlide_01 = track_01.querySelector(".nuvaerende_slide_01");
  const nuvaerendeKnap_01 = indikatorNav_01.querySelector(
    ".nuvaerende_slide_01"
  );

  // findIndex tjekker arrayet og returnerer index-nummeret ved det første rigtige //
  const trykIndex_01 = indikator_01.findIndex(
    (indikator_01) => indikator_01 === trykKnap_01
  );

  // Vi kan bruge konsolloggen og tjekke, at når der eksempelvis klikkes på den midterste knap,
  // så vises index-nummeret 1. Det gør den, da array starter med at tælle fra 0 //
  console.log(trykIndex_01);

  // trykSlide lader os finde ud af trykSlide og fokusere på denne //
  const trykSlide_01 = slides_01[trykIndex_01];

  // Nu bruger vi trykSlide, som fokuserer på et index-nummer fra array til at fortælle
  // flytTilSlide, at vi netop skal slide til dette nummer i arrayet. //
  flytTilSlide_01(track_01, nuvaerendeSlide_01, trykSlide_01);

  opdaterKnap_01(nuvaerendeKnap_01, trykKnap_01);
});

//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________

// Først vil alle variabler nedskrives i form af const (gør det nemmere at arbejde med) //

const track_02 = document.querySelector(".carousel_track_02");
const slides_02 = Array.from(track_02.children);
const naesteKnap_02 = document.querySelector(".carousel_knap_hoejre_02");
const sidsteKnap_02 = document.querySelector(".carousel_knap_venstre_02");
const indikatorNav_02 = document.querySelector(".carousel_nav_02");
const indikator_02 = Array.from(indikatorNav_02.children);

const slideWidth_02 = slides_02[0].getBoundingClientRect().width;
console.log(slideWidth_02);

// Arrangér slides, sådan så de står ved siden af hinanden //
slides_02[0].style.left = slideWidth_02 * 0 + "px";
slides_02[1].style.left = slideWidth_02 * 1 + "px";
slides_02[2].style.left = slideWidth_02 * 2 + "px";
// Hvis man vil gøre dette på en automatisk metode, sådan så man kan tilføje eller
// fjerne billeder som det lystrer, uden at man skal redigere i JavaScript manuelt,
// kan man bruge følgende; slides.forEach((slide, index)=> {slide.style.left = slideWidth * index + "px";});

const flytTilSlide_02 = (track_02, nuvaerendeSlide_02, trykSlide_02) => {
  track_02.style.transform = "translateX(-" + trykSlide_02.style.left + ")";
  nuvaerendeSlide_02.classList.remove("nuvaerende_slide_02");
  trykSlide_02.classList.add("nuvaerende_slide_02");
};

const opdaterKnap_02 = (nuvaerendeKnap_02, trykKnap_02) => {
  // Her fjernes den nuværende class på knappen og giver den videre til den, vi har trykket på //
  nuvaerendeKnap_02.classList.remove("nuvaerende_slide_02");
  trykKnap_02.classList.add("nuvaerende_slide_02");
};

function naesteBillede_02() {
  console.log("naesteBillede_02");

  // Her laver vi en const, der leder efter det nuværende slide i selve
  // listepunktet carousel_slide, hvor alle billeder er //
  const nuvaerendeSlide_02 = track_02.querySelector(".nuvaerende_slide_02");
  // Her laver vi en const, der går ind og finder næste "sibling", altså det næste billede i rækkefølgen.
  const naesteSlide_02 = nuvaerendeSlide_02.nextElementSibling;

  // Her gør vi, at når vi klikker på næste billede til højre, vil knappernes næste søskende følge med,
  // og på denne måde påvirkes de af opdaterKnap, som fjerner og giver class nuvaerende_slide //
  const nuvaerendeKnap_02 = indikatorNav_02.querySelector(
    ".nuvaerende_slide_02"
  );
  const naesteKnap_02 = nuvaerendeKnap_02.nextElementSibling;

  // Nu skal vi gøre, så vi rykker til næste slide //

  flytTilSlide_02(track_02, nuvaerendeSlide_02, naesteSlide_02);
  // Hver gang vi klikker, ændrer nuvaerendeSlide sig. Værdien evalueres og puttes ind
  // i funktionen. Derefter evalueres naesteSlide og sættes i funktionen.
  // HVAD END der er i naesteSlide sættes i og filtreres gennem TrykSlide.

  opdaterKnap_02(nuvaerendeKnap_02, naesteKnap_02);
}

function sidsteBillede_02() {
  console.log("sidsteBillede_02");

  // Her laver vi en const, der leder efter det nuværende slide i selve
  // listepunktet carousel_slide, hvor alle billeder er //
  const nuvaerendeSlide_02 = track_02.querySelector(".nuvaerende_slide_02");
  // Her laver vi en const, der går ind og finder sidste "sibling", altså det sidste billede i rækkefølgen.
  const sidsteSlide_02 = nuvaerendeSlide_02.previousElementSibling;

  // Her gør vi, at når vi klikker på næste billede til venstre, vil knappernes sidste søskende følge med,
  // og på denne måde påvirkes de af opdaterKnap, som fjerner og giver class nuvaerende_slide //
  const nuvaerendeKnap_02 = indikatorNav_02.querySelector(
    ".nuvaerende_slide_02"
  );
  const sidsteKnap_02 = nuvaerendeKnap_02.previousElementSibling;

  // Nu skal vi gøre, så vi rykker til sidste slide //

  flytTilSlide_02(track_02, nuvaerendeSlide_02, sidsteSlide_02);
  // Hver gang vi klikker, ændrer nuvaerendeSlide sig. Værdien evalueres og puttes ind
  // i funktionen. Derefter evalueres sidsteSlide og sættes i funktionen.
  // HVAD END der er i sidsteSlide sættes i og filtreres gennem TrykSlide.

  opdaterKnap_02(nuvaerendeKnap_02, sidsteKnap_02);
}

// Når der trykkes på nav-indikatoreren, slides der til denne //
indikatorNav_02.addEventListener("click", (e) => {
  // Her finder vi ud af, hvilken indikator der er trykket på //
  const trykKnap_02 = e.target.closest("button");

  // Hvis vi klikker på noget, som ikke er vores indikatorknap, så stopper funktionen //
  // Hvis vi klikker på noget, som er en del af indikatorknappen, så forbliver funktionen //
  if (!trykKnap_02) return;

  // Vi vil gerne vide, hvilket slide vi er på, og hvilken indikatorknap vi er på //
  const nuvaerendeSlide_02 = track_02.querySelector(".nuvaerende_slide_02");
  const nuvaerendeKnap_02 = indikatorNav_02.querySelector(
    ".nuvaerende_slide_02"
  );

  // findIndex tjekker arrayet og returnerer index-nummeret ved det første rigtige //
  const trykIndex_02 = indikator_02.findIndex(
    (indikator_02) => indikator_02 === trykKnap_02
  );

  // Vi kan bruge konsolloggen og tjekke, at når der eksempelvis klikkes på den midterste knap,
  // så vises index-nummeret 1. Det gør den, da array starter med at tælle fra 0 //
  console.log(trykIndex_02);

  // trykSlide lader os finde ud af trykSlide og fokusere på denne //
  const trykSlide_02 = slides_02[trykIndex_02];

  // Nu bruger vi trykSlide, som fokuserer på et index-nummer fra array til at fortælle
  // flytTilSlide, at vi netop skal slide til dette nummer i arrayet. //
  flytTilSlide_02(track_02, nuvaerendeSlide_02, trykSlide_02);

  opdaterKnap_02(nuvaerendeKnap_02, trykKnap_02);
});

//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________
//___________________________________________________________________________________

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  console.log("toggleMenu");
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");
  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  let menuShown = nav.classList.contains("shown");
  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    btn.textContent = "Luk";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.textContent = "Menu";
  }
}
