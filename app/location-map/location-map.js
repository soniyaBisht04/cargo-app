// .controller('locationMapCtrl', [function($scope) {
//   function initialize() {
//
//     $scope.map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: { lat: -25.363, lng: 131.044 }
//     });
//
//
//
//     $scope.cities = [
//       { title: 'Sydney', lat: -33.873033, lng: 151.231397 },
//       { title: 'Melbourne', lat: -37.812228, lng: 144.968355 }
//     ];
//
//
//     $scope.infowindow = new google.maps.InfoWindow({
//       content: ''
//     });
//
//
//     for (var i = 0; i < $scope.cities.length; i++) {
//
//
//       var marker = new google.maps.Marker({
//         position: new google.maps.LatLng($scope.cities[i].lat, $scope.cities[i].lng),
//         map: $scope.map,
//         title: $scope.cities[i].title
//       });
//
//       // var content = '<a ng-click="cityDetail(' + i + ')" class="btn btn-default">View details</a>';
//       // var compiledContent = $compile(content)($scope)
//
//       // google.maps.event.addListener(marker, 'click', (function(marker, content, scope) {
//       //     return function() {
//       //         scope.infowindow.setContent(content);
//       //         scope.infowindow.open(scope.map, marker);
//       //     };
//       // })(marker, compiledContent[0], $scope));
//
//     }
//
//   }
//
//   google.maps.event.addDomListener(window, 'load', initialize);
// }]);

'use strict';

angular.module('myApp.locationMap', ['ngRoute']).component('locationMap', {
  templateUrl: 'location-map/location-map.html',
  controller: function LocationMapController() {
    this.initialize = function(){
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: -25.363, lng: 131.044 }
      });
      this.cities = [
        { title: 'Sydney', lat: -33.873033, lng: 151.231397 },
        { title: 'Melbourne', lat: -37.812228, lng: 144.968355 }
      ];


      this.infowindow = new google.maps.InfoWindow({
        content: ''
      });


      for (var i = 0; i < this.cities.length; i++) {


        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.cities[i].lat, this.cities[i].lng),
          map: this.map,
          title: this.cities[i].title
        });

        // var content = '<a ng-click="cityDetail(' + i + ')" class="btn btn-default">View details</a>';
        // var compiledContent = $compile(content)($scope)

        // google.maps.event.addListener(marker, 'click', (function(marker, content, scope) {
        //     return function() {
        //         scope.infowindow.setContent(content);
        //         scope.infowindow.open(scope.map, marker);
        //     };
        // })(marker, compiledContent[0], $scope));

      }
    };

    google.maps.event.addDomListener(window, 'load', this.initialize());
  }


});