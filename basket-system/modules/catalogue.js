// modules/catalogue.js
class Catalogue {
    constructor(products) {
      this.products = products;
    }
  
    getProduct(productCode) {
      return this.products.find(product => product.code === productCode);
    }
  }
  
  module.exports = Catalogue;
  