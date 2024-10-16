function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop()
  frameRate(1);
}

function draw() {
  background("white");
  fill("black");

  let size = (15);
  let spacing = random(0,20);
  let XnColonne = windowWidth/(20+spacing); // Numero colonne
  let YnRighe = windowHeight/(20+spacing); // Numero righe

  // Calcolo della larghezza e dell'altezza totali della griglia
  let gridWidth = XnColonne * (size + spacing) - spacing;
  let gridHeight = YnRighe * (size + spacing) - spacing;

  // Calcolo delle posizioni iniziali di x e y per centrare la griglia
  let startX = (width - gridWidth) / 2;
  let startY = (height - gridHeight) / 2;

  for (let qx = 0; qx < XnColonne; qx++) {
    for (let qy = 0; qy < YnRighe; qy++) {
      push();
      translate(startX + qx * (size + spacing) + size/2, startY + qy * (size + spacing) + size/2);
      if (random(1) < 0.5) {
        rotate(PI/4);
      }
      rect(-size/2, -size/2, size, size);
      pop();
    }
  }
}
