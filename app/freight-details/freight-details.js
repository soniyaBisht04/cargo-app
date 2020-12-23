'use strict';

angular.
module('myApp.freightDetails', ['ngRoute']).
component('freightDetails', {
  templateUrl: 'freight-details/freight-details.html',
  controller: function FreightDetailsController() {
    this.typeOfGood = 'paper';
    this.options = ["Pallet", "Type2", "Type3"];
    this.quantityOptions = [1,2,3,4,5,6,7,8];
    this.selectedQuantity = this.quantityOptions[1];
    this.selectedOption = this.options[0];
    this.testVar = 'abc';
  }
});