function hasMutation(dna) {
  let sumaSecuencias = 0; 

  // SECUENCIAS EN HORIZONTAL
  for (let i = 0; i < dna.length; i++) {
    let adn = dna[i];
    let letrasCount = {};

    for (let k = 0; k < adn.length; k++) {
      let letraAdn = adn[k];
      if (letrasCount.hasOwnProperty(letraAdn)) {
        letrasCount[letraAdn]++;
      } else {
        letrasCount[letraAdn] = 1;
      }
    }

    let secuencias = 0;
    for (let letra in letrasCount) {
      if (letrasCount[letra] >= 4) {
        secuencias++;
      }
    }
    sumaSecuencias += secuencias;
  }

  // SECUENCIA EN VERTICAL
  for (let j = 0; j < dna[0].length; j++) {
    let letrasCount = {};

    for (let i = 0; i < dna.length; i++) {
      let letraAdn = dna[i][j];
      if (letrasCount.hasOwnProperty(letraAdn)) {
        letrasCount[letraAdn]++;
      } else {
        letrasCount[letraAdn] = 1;
      }
    }

    let secuencias = 0;
    for (let letra in letrasCount) {
      if (letrasCount[letra] >= 4) {
        secuencias++;
      }
    }
    sumaSecuencias += secuencias;
  }

  // SECUENCIAS EN DIAGONALES
  for (let i = 0; i < dna.length; i++) {
    for (let j = 0; j < dna[i].length; j++) {
      let diagonalSecuencia = "";
      
      // Diagonal hacia la derecha y abajo
      for (let k = 0; i + k < dna.length && j + k < dna[i].length; k++) {
        diagonalSecuencia += dna[i + k][j + k];
      }
      let letrasCount = contarLetras(diagonalSecuencia);
      sumaSecuencias += contarSecuencias(letrasCount);

      // Reiniciar la secuencia diagonal
      diagonalSecuencia = "";

      // Diagonal hacia la izquierda y abajo
      for (let k = 0; i + k < dna.length && j - k >= 0; k++) {
        diagonalSecuencia += dna[i + k][j - k];
      }
      letrasCount = contarLetras(diagonalSecuencia);
      sumaSecuencias += contarSecuencias(letrasCount);
    }
  }
  
  console.log(sumaSecuencias);
  return sumaSecuencias >= 2;
}

function contarLetras(secuencia) {
  let letrasCount = {};
  for (let letra of secuencia) {
    if (letrasCount.hasOwnProperty(letra)) {
      letrasCount[letra]++;
    } else {
      letrasCount[letra] = 1;
    }
  }
  return letrasCount;
}

function contarSecuencias(letrasCount) {
  let secuencias = 0;
  for (let letra in letrasCount) {
    if (letrasCount[letra] >= 4) {
      secuencias++;
    }
  }
  return secuencias;
}

let adn = [
  "GTGATA",
  "CATGAG",
  "ATGTGA",
  "TGAAGT",
  "TCATCC",
  "TCACTG"
];

console.log(hasMutation(adn));



