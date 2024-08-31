# Introduction

This is created as a proof of concept(POC) for their new sales system, it has following three products. 

| Product       | Code          |Price
| --------      | -------       |-------
| Red Widget    | R01           |$32.95
| Green Widget  | G01           |$24.95
| Blue Widget   | B01           |$7.95


# Functionality 

POC should have following capabilities 


## Basket
Proof of concepts includes implementing the basket, which needs to have the following interface 
* It is initialised with the product catalogue, delivery charge rules, and offers (the format of how these are passed it up to you)
* It has an add method that takes the product code as a parameter.
* It has a total method that returns the total cost of the basket, taking into account the delivery and offer rules.

## Delivery charge 
To incentivise customers to spend more, delivery costs are reduced based on the amount spent. Orders under $50 cost $4.95. For orders under $90, delivery costs $2.95. Orders of
$90 or more have free delivery.

## Special offers
POC supports special offers. The initial offer will be “buy one red widget, get the second half price”.

# High Level Design

This basket system is designed to manage a shopping basket, including adding products, applying special offers, and calculating the total cost, including delivery charges. The system is modular, making it easy to extend or modify components like the product catalog, delivery rules, and special offers.

## Basket System Design Summary

This basket system is designed to manage a shopping basket, including adding products, applying special offers, and calculating the total cost, including delivery charges. The system is modular, making it easy to extend or modify components like the product catalog, delivery rules, and special offers.

### Catalogue

* Store and manage the product catalog.
* Provide methods to retrieve product information (e.g., price, description) based on product codes.
* Class Name: Catalogue and File: modules/catalogue.js

### Basket
* Manage the items added to the basket.
* Calculate the total cost of the basket, including applying discounts and delivery charges.
* Provide a method to print the contents and summary of the basket.
* Class Name: Basket  and File: modules/basket.js

### Offers 
* Define and manage delivery cost rules based on the order total.
* Calculate the appropriate delivery charge based on predefined thresholds.
* Class Name: DeliveryRules and File:  modules/deliveryRules.js

### DeliveryRules 
* Manage and apply special offers to the items in the basket.
* Calculate the total discount based on the offers applied to the basket.
* Class Name: Offers and File:  modules/Offers.js

### Autoloader 
* Automatically load and initialize modules from a specified directory.
* Simplify the process of importing and using different modules in the system.
* Class Name: autoloadModules and File: utils/autoloader.js

## Integration Workflow
### Initialization:
* The Catalogue, DeliveryRules, and Offers classes are instantiated and initialized with their respective data (product catalog, delivery rules, and offers).
### Adding Products to the Basket:
* Products are added to the basket using the Basket class’s add(productCode) method, which uses the Catalogue class to retrieve product details.
### Applying Offers:
* Special offers are applied when calculating the total using the applyOffers() method from the Offers class.
### Calculating Total Cost:
* The Basket class calculates the total cost by summing the prices of the items, applying any discounts from offers, and adding the delivery cost from the DeliveryRules class.
### Printing Basket Summary:
* The printBasket() method provides a detailed summary of the basket’s contents, discounts applied, delivery charges, and the final total cost.
## Extensibility

* Modify the Catalogue class or its initialization to add or change products.
* Update the DeliveryRules class to adjust thresholds and costs.
* Extend the Offers class with additional offer types by adding new methods or logic.
* The autoloading mechanism makes it easy to add new modules without modifying the core integration logic.








