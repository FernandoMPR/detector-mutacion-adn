import hasMutation from "../controllers/DetectorMutacionesHorizontal.js";


class AdnModel {
    constructor() {
      this.adns = [];
    }
  
    addAdn(adn) {
      this.adns.push(adn);
    }
  
    getAdns() {
      return this.adns;
    }

    countMutations() {
      const mutatedAdns = this.adns.filter((adn) => hasMutation(adn.adn));
      return mutatedAdns.length;
    }

    countNoMutations() {
      const nonMutatedAdns = this.adns.filter((adn) => !hasMutation(adn.adn));
      return nonMutatedAdns.length;
    }
    
  }
  

export default AdnModel