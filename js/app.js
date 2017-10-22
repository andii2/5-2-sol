(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getToBuyItems();

  tobuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index)
  }

}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyb = this;

  alreadyb.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  var tobuyItems = [{name: "Milk", quantity: 10},
                    {name: "Soap", quantity:1},
                    {name: "Chocolate", quantity:3},
                    {name: "Sugar", quantity: 4},
                    {name: "Salt", quantity: 1}
                  ];

  var alreadybItems = [];


  service.getToBuyItems = function () {
      return tobuyItems;
  };

  service.getAlreadyBoughtItems = function () {
      return alreadybItems;
  };

  service.buyItem = function (index) {
    var item = "";
    item = tobuyItems[index];
    tobuyItems.splice(index,1);
    alreadybItems.push(item);
  };
}


})();
