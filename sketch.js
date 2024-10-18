  function setup() {
    createCanvas(windowWidth, windowHeight);
    // Disattivando questo noLoop si possono visualizzare le 4 opere cambiare randomicamente
    noLoop();
    frameRate(1);
  }
  
  function draw() {
    background("white"); // Imposta lo sfondo su bianco
    fill("black"); // Imposta il colore di riempimento dei quadrati su nero
  
    // Misura lato dei quadrati
    let size = 15;
    // La spaziatura variabile tra i quadrati, una spaziatura per ciascuna delle 4 opere di Vera Molnar
    let spacing = random([0, 5, 7.5, 15]);
  
    // Calcola il numero di colonne e righe in base alle dimensioni della finestra e alla spaziatura
    let XnColonne = windowWidth / (18 + spacing);
    let YnRighe = windowHeight / (18 + spacing);
  
    // Calcola la larghezza e l'altezza totali della griglia
    let gridWidth = XnColonne * (size + spacing) - spacing;
    let gridHeight = YnRighe * (size + spacing) - spacing;
  
    // Calcola le posizioni iniziali di x e y per centrare la griglia al centro della finestra
    let startX = (width - gridWidth) / 2;
    let startY = (height - gridHeight) / 2;
  
    // Questo ciclo for serve a disegnare la griglia di quadrati
    for (let qx = 0; qx < XnColonne; qx++) {
      for (let qy = 0; qy < YnRighe; qy++) {
        push();
        // Calcola le coordinate del centro dei quadrati
        translate(startX + qx * (size + spacing) + size / 2, startY + qy * (size + spacing) + size / 2);
        // Serve a ruotare i quadrati con una probabilità del 50%
        if (random(1) < 0.5) {
          rotate(PI / 4);
        }
        // Serve per disegnare il quadrato centrato nell'origine
        rect(-size / 2, -size / 2, size, size);
        pop(); 
      }
    }
  }
