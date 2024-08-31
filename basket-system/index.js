const path = require('path');
const autoloadModules = require('./utils/autoloader');

const modules = autoloadModules(path.join(__dirname, 'modules'));

// Define the product catalogue
const productCatalogue = [
  { code: 'R01', price: 32.95, description: 'Red Widget' },
  { code: 'G01', price: 24.95, description: 'Green Widget' },
  { code: 'B01', price: 7.95, description: 'Blue Widget' }
];

// Define special offers

const offersConfig = [
  { type: 'buyOneGetOneHalfPrice', productCode: 'R01' }
];

// Initialize catalogue, delivery rules, and offers
const catalogue = new modules.catalogue(productCatalogue);
const deliveryRules = new modules.deliveryRules();
const offers = new modules.offers(offersConfig);

// Initialize basket
const basket = new modules.basket({ catalogue, deliveryRules, offers });



// Example usage
basket.add('B01');
basket.add('B01');
basket.add('R01');
basket.add('R01');
basket.add('R01');

// Print basket with product descriptions
basket.printBasket();

