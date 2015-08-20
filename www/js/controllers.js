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

.controller('PhotoAlbumCtrl', function($scope, $ionicModal, ImageService, $cordovaCamera, $cordovaFile) {
  $scope.imageService = ImageService;
  $scope.monumentName = monuments;

  $ionicModal.fromTemplateUrl('templates/full-image-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function(index) {
    $scope.galleryImage = $scope.imageService.images[index];
    if ($scope.galleryImage) {
      $scope.modal.show();
    }
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile, $window) {
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

   angular.element(document).ready(function () {
     initialize()
   });


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
       var current_location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
       var user_peg = {
            url: 'img/user_peg.png',
            scaledSize: new google.maps.Size(50,50)
          };

       $scope.map.setCenter(current_location);
       var user = new google.maps.Marker({
         position: current_location,
         map: $scope.map,
         title: "You are here",
         icon: user_peg
       });
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
