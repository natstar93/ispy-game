angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, $ionicModal, ImageService, $state, $cordovaCamera, $cordovaFile) {

  $scope.imageService = ImageService;

  $scope.takePhoto = function() {
    $scope.imageService.addImage($scope.selectedname.index);
    setTimeout(function(){
      $scope.closeModal();
    }, 1000);
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
     var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

     var mapOptions = {
       center: myLatlng,
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById("map"),
         mapOptions);

     //Marker + infowindow + angularjs compiled ng-click
     var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
     var compiled = $compile(contentString)($scope);

     var infowindow = new google.maps.InfoWindow({
       content: compiled[0]
     });

     var marker = new google.maps.Marker({
       position: myLatlng,
       map: map,
       title: 'Uluru (Ayers Rock)'
     });

     google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
     });

     $scope.map = map;
   }
   google.maps.event.addDomListener(window, 'load', initialize);

   $scope.centerOnMe = function() {
     if(!$scope.map) {
       return;
     }

     $scope.loading = $ionicLoading.show({
       content: 'Getting current location...',
       showBackdrop: false
     });

     navigator.geolocation.getCurrentPosition(function(pos) {
       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
       $ionicLoading.hide();
     }, function(error) {
       alert('Unable to get location: ' + error.message);
     });
   };

   $scope.clickTest = function() {
     alert('Example of infowindow with ng-click');
   };
 });
