angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, $ionicModal, ImageService, $state, $cordovaCamera, $cordovaFile) {

  $scope.imageService = ImageService;

  $scope.takePhoto = function() {
    $scope.imageService.addImage($scope.selectedname.index);
    setTimeout(function(){
      $scope.closeModal();
    }, 1000);
  };

  $scope.checkOpacity = function(index) {
    if ($scope.imageService.images[index])  {return 1.0;}
    return 0.2;
  };

  $ionicModal.fromTemplateUrl('templates/cluemodal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function(name) {
    $scope.selectedname = monuments[name];
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('PhotoAlbumCtrl', function($scope, ImageService, $cordovaCamera, $cordovaFile) {
  $scope.imageService = ImageService;
  $scope.monumentName = monuments;
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
   function initialize() {
     var myLatlng = new google.maps.LatLng(51.5072,-0.1275);

     var mapOptions = {
       center: myLatlng,
       zoom: 12,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       minZoom: 12
     };
     var map = new google.maps.Map(document.getElementById("map"),
         mapOptions);

     //Marker + infowindow + angularjs compiled ng-click

    for(var i=0; i < 7; i++) {
       var contentString = "<div><a ng-click='clickTest()'>Monument</a></div>";
       var compiled = $compile(contentString)($scope);

       var infowindow = new google.maps.InfoWindow({
         content: compiled[0]
       });

        var monumentLatlng = new google.maps.LatLng(monuments[i].longitude, monuments[i].latitude);

       var marker = new google.maps.Marker({
         position: monumentLatlng,
         map: map,
         title: monuments[i].name,
       });
    }

     google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
     });

     $scope.map = map;
   }
   google.maps.event.addDomListener(window, 'load', initialize);

// Find my location
   $scope.centerOnMe = function() {
     if(!$scope.map) {
       return;
     }

     $ionicLoading.show({
       content: 'Getting current location...',
       showBackdrop: false
     });

     navigator.geolocation.getCurrentPosition(function(pos) {
       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
       $scope.map.setZoom(16);
       $ionicLoading.hide();
     }, function(error) {
       alert('Unable to get location: ' + error.message);
     });
   };

   $scope.clickTest = function() {
     alert('Example of infowindow with ng-click');
   };
 });
