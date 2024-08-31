// modules/deliveryRules.js
class DeliveryRules {
  constructor() {
    // Define delivery rules as an array of objects with 'threshold' and 'cost'
    this.rules = [
      { threshold: 90, cost: 0 },    // Free delivery for orders $90 and above
      { threshold: 50, cost: 2.95 }, // Delivery cost $2.95 for orders between $50 and $89.99
      { threshold: 0, cost: 4.95 }   // Delivery cost $4.95 for orders below $50
    ];
  }

  calculateDeliveryCost(total) {
    // Find the applicable delivery cost based on the order total
    for (const rule of this.rules) {
      if (total >= rule.threshold) {
        return rule.cost;
      }
    }
    return 0; // Default case, should never be reached with proper rule definition
  }
}

module.exports = DeliveryRules;
