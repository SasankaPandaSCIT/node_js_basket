// modules/basket.js
class Basket {
    constructor({ catalogue, deliveryRules, offers }) {
      this.catalogue = catalogue;
      this.deliveryRules = deliveryRules;
      this.offers = offers;
      this.items = [];
    }
  
    add(productCode) {
      const product = this.catalogue.getProduct(productCode);
      if (product) {
        this.items.push({ product });
      } else {
        throw new Error('Product not found');
      }
    }
  
    total() {
      let total = this.items.reduce((sum, item) => sum + item.product.price, 0);
      const discount = this.offers.applyOffers(this.items);
      total -= discount;
      total += this.deliveryRules.calculateDeliveryCost(total);
      return total;
    }
  
    printBasket() {
      if (this.items.length === 0) {
        console.log('Basket is empty');
        return;
      }
  
      console.log('Basket contents:');
      this.items.forEach(item => {
        const product = item.product;
        const description = item.description;
        console.log(`Product: ${product.code}, Description: ${product.description}, Price: $${product.price.toFixed(2)}`);
      });
  
      const discount = this.offers.applyOffers(this.items);
      const deliveryCost = this.deliveryRules.calculateDeliveryCost(this.total() - discount);
      const totalCost = this.total().toFixed(2);
  
      console.log(`\nDiscount applied: $${discount.toFixed(2)}`);
      console.log(`Delivery cost: $${deliveryCost.toFixed(2)}`);
      console.log(`Total cost: $${totalCost}`);
    }
  }
  
module.exports = Basket;
  