(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController($scope) {

  var toBuy = this;

  // List to buy items
//  var toBuy =
//     [
//     {name: "Cookies",   quantity: "10"},
//     {name: "KitKat",   quantity: "15"},
//     {name: "Pepto Bismol",    quantity: "13"}
// ];



//toBuy.Items = ShoppingListCheckOffService.getItemstoBuy();

toBuy.bought = function () {
  ShoppingListCheckOffService.addItemBought(toBuy.name, toBuy.quantity);
  console.log("click!");
 }


}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController($scope) {

  // List of bought items
  //var boughtItems = [];
  var boughtItems = this;


//  boughtItems.Items = ShoppingListCheckOffService.getItemsBought();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List to buy items
  //var toBuy = [];

  // List to buy items
 var toBuy =
    [
    {name: "Cookies",   quantity: "10"},
    {name: "KitKat",   quantity: "15"},
    {name: "Pepto Bismol",    quantity: "13"}
];

  // List of bought items
  var bought= [];



  service.addItemBought = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    bought.push(item);
  };

  service.removeItem = function (itemIdex) {
    toBuy.splice(itemIdex, 1);
  };

  service.getItemstoBuy = function () {
    return toBuy;
  };

  service.getItemsBought = function () {
    return bought;
  };

}



})();
