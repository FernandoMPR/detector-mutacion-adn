import hasMutation from "../controllers/DetectorMutacionesHorizontal.js";

class AdnModel {
  constructor() {
    this.adns = [];
  }

  //INGRESAR NUEVO ADN
  addAdn(adn) {
    this.adns.push(adn);
  }

  //OBTENER ADNS
  getAdns() {
    return this.adns;
  }

  //CONTADOR DE MUTACIONES
  countMutations() {
    const mutatedAdns = this.adns.filter((adn) => hasMutation(adn.adn));
    return mutatedAdns.length;
  }

  //CONTADOR DE NO MUTACIONES
  countNoMutations() {
    const nonMutatedAdns = this.adns.filter((adn) => !hasMutation(adn.adn));
    return nonMutatedAdns.length;
  }
}

export default AdnModel;
