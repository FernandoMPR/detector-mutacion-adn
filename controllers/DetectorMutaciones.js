function hasMutation (dna) {
    console.log(dna[0])

    for (let i = 0; i < dna.length; i++) {
        let adn = dna[i]
        let letrasCount =  {}
        // console.log(adn)
        for (let k = 0; k < adn.length; k++){
            let letraAdn = adn[k];
            if (letrasCount.hasOwnProperty(letraAdn)){
                letrasCount[letraAdn]++
            }else {
                letrasCount[letraAdn] = 1
            }
        }
        console.log(letrasCount)
    }

}

let adn = [
  "ATGCGA",
  "CAGTGC",
  "TTATGT",
  "AGAAGG",
  "CCCCTA",
  "TCACTG"
];

console.log(hasMutation(adn))