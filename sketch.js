let SIZE = 150;
let NUMBER_OF_CIRCLES = 50;
let AMPLITUDE = 150;
let time = 0;


function setup() {
  console.log ("Setup")
  createCanvas(900, 800);
  
  noStroke();
}

function draw() {
   time += deltaTime / 900;

  background(0);
  
  // for (valore di partenza; condizione per cui il for va avanti; come cambia il valore ad ogni ciclo) {) 
  for (let count = 0; count < NUMBER_OF_CIRCLES; count+=1) {
    // operazioni 
    let progress = count / NUMBER_OF_CIRCLES; // valore normalizzato (0-1)

    // posizione
    let centraly = height/2;
    let x = sin (progress * 5 + time *2) * AMPLITUDE + centraly;
    let y = centraly + cos (progress * 20 + time *1) * AMPLITUDE;

    // colore
    let r = 127 * sin (progress * 9 ) * 127;
    let g = 127 - sin (progress *30 ) * 127;
    let b = 127 / sin (progress * 3 ) * 127;
    fill(r, g, b);
     
    // disegna il cerchio
    let multiplier = sizeMultiplier (time, progress); // 0-1
    multiplier = map (multiplier, 0, 1, 0.5, 1.5); // 0.5-1

    circle (x, y, SIZE * multiplier);
    //rect (x, y, SIZE * multiplier, SIZE * multiplier);
    //triangle (x, y, x + SIZE * multiplier, y, x + SIZE * multiplier / 2, y - SIZE * multiplier);
    //ellipse (x, y, SIZE * multiplier, SIZE * multiplier / 2);
} 
}
// funzione che restituisce un moltiplicatore per la dimensione del cerchio, in base al tempo e alla progressione del ciclo
function sizeMultiplier (time, progress) {
  return 0.5 + 0.5 / sin (time + progress * 1);
}

