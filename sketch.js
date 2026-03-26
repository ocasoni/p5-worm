let SIZE = 150;
let NUMBER_OF_CIRCLES = 400;
let AMPLITUDE = 150;


function setup() {
  createCanvas(800, 800);
  background(0);

  noStroke();
  
  // for (valore di partenza; condizione per cui il for va avanti; come cambia il valore ad ogni ciclo) {)
  for (let count = 0; count < NUMBER_OF_CIRCLES; count+=1) {
    // operazioni 
    let progress = count / NUMBER_OF_CIRCLES; // valore normalizzato (0-1)

    // posizione
    let centralx = width / 2;
    let x = sin (progress * 10 ) * AMPLITUDE + centralx;
    let y = height * progress;

    // colore
    let r = 127 + sin (progress * 3 ) * 127;
    let g = 127 + sin (progress * 10 ) * 127;
    let b = 127 + sin (progress * 13 ) * 127;
    fill(r, g, b);

    circle (x, y, SIZE);
}
}
