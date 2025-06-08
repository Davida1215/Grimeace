function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar img
  const img = document.querySelector("#profile img")
  // substituir 
  if (html.classList.contains("light")) {
  // se tiver light
  img.setAttribute('src', './assets/avatar-light.png')
  img.setAttribute("alt", "Grimeace bundudo com oculos")
  } else {
    // se tiver dark
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Grimeace bundudo sem oculos")
  }
}
