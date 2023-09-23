function hasMutationHorizontal(dna) {
    let sumaSecuencias = 0; 
  
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
  
    if (sumaSecuencias >= 2) {
      return true;
    } else {
      return false;
    }
  }

  export default hasMutationHorizontal

// let adn = [
//   "ATGATA",
//   "CAGTGC",
//   "TTATGT",
//   "AGAGTG",
//   "GCGTCA",
//   "TCACTG"
// ];

// console.log(hasMutation(adn))