// modules/offers.js
class Offers {
  constructor(offers = []) {
    this.offers = offers;  // Ensure offers is an array
  }

  applyOffers(basket) {
    let discount = 0;
    
    // Create a map to count the number of items for each product
    const productCounts = basket.reduce((counts, item) => {
      counts[item.product.code] = (counts[item.product.code] || 0) + 1;
      return counts;
    }, {});

    // Iterate through the offers and apply them
    for (const offer of this.offers) {
      if (offer.type === 'buyOneGetOneHalfPrice') {
        if (productCounts[offer.productCode] >= 2) {
          const productPrice = basket.find(item => item.product.code === offer.productCode).product.price;
          const applicableItems = productCounts[offer.productCode];
          const discountPerItem = productPrice / 2;
          discount += (applicableItems - Math.floor(applicableItems / 2)) * discountPerItem;
        }
      }
    }

    return discount;
  }
}

module.exports = Offers;
