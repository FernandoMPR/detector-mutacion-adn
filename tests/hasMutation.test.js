const hasMutation = require('../controllers/DetectorMutacionesHorizontal.js');


describe("hasMutation", () => {
     it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN HORIZONTAL", () => {
    const dna = [
        'ATGCGA',
        'CAGTGC',
        'TTATGT',
        'AGAAGG',
        'CCCCTA',
        'TCACTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});

it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN VERTICAL", () => {
    const dna = [
        'ATGTGA',
        'CAGTGC',
        'TGATGT',
        'TGACGG',
        'TCCCTA',
        'TCACTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});

it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN DIAGONAL DERECHA", () => {
    const dna = [
        'ATGTGA',
        'CAGTGC',
        'TGATGT',
        'TTAAGG',
        'GCTCTA',
        'TCATTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});

it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN DIAGONAL IZQUIERDA", () => {
    const dna = [
        'ATGTGA',
        'CATTAC',
        'TTAAGT',
        'TTAAGG',
        'GCTCTA',
        'TCATTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});


it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN HORIZONTAL Y VERTICAL", () => {
    const dna = [
        'ATGGGG',
        'CATTAC',
        'TTGAGT',
        'TTAAGG',
        'TCCCTA',
        'TCATTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});

it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN VERTICAL Y DIAGONAL DERECHA", () => {
    const dna = [
        'ATGGGC',
        'CATTAC',
        'TTAAGT',
        'TTAAGG',
        'TCCCTA',
        'TCATTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});

it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN VERTICAL Y DIAGONAL IZQUIERDA", () => {
    const dna = [
        'ATGGGA',
        'CATTAC',
        'TTGAGT',
        'TTAAGG',
        'TCCCTA',
        'TCATTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});

it ("DEVUELVE TRUE SI HAY 2 SECUENCIAS DE 4 LETRAS IGUALES REPETIDAS EN LOS ARREGLOS DEL ADN DIAGONAL DERECHA Y DIAGONAL IZQUIERDA", () => {
    const dna = [
        'ATGGGA',
        'CATTAC',
        'TTAAGT',
        'TTAAGG',
        'ACCCTA',
        'TCATTG'
      ];
      const result = hasMutation(dna)
      expect(result).toBe(true)
});


it ("DEVUELVE FALSE SI NO SE DETECTAN MUTACIONES DE 2 SECUENCIAS  EN EL ADN", () => {
    const dna = [
        'ATGCGA',
        'CAGTGC',
        'TTATTT',
        'AGACGG',
        'GCGTCA',
        'TCACTG'
      ];
      const result = hasMutation(dna)
        expect(result).toBe(false);
});
});

