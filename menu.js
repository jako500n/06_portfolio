window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  /* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
  btn.addEventListener("click", toggleMenu);
}

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
