'use strict';
angular.
module('myApp.sidenav', ['ngRoute']).
component('sideNav', {
  templateUrl: 'sidenav-view/sidenav-view.html',
  controller: function SideNavController() {
    this.abc = "setfgh0";
  }
});