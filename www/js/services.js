angular.module('starter.services', [])

.service('ImageService', function($state, $rootScope, $ionicModal, $cordovaCamera, $cordovaFile) {


  var init = function(tpl, $scope) {

  var promise;
  $scope = $scope || $rootScope.$new();

  promise = $ionicModal.fromTemplateUrl(tpl, {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    return modal;
  });

  $scope.openModal = function() {
     $scope.modal.show();
   };
   $scope.closeModal = function() {
     $scope.modal.hide();
   };
   $scope.$on('$destroy', function() {
     $scope.modal.remove();
   });

  return promise;
  };





  var self = this;

  self.images = JSON.parse(window.localStorage.images || '[]');

  self.placeheldgallery = [];

  for(var i=0; i < 12; i++) {
    if(self.images[i]) {
      self.placeheldgallery[i] = self.images[i];
    }
    else {
      self.placeheldgallery[i] = {url: "img/pigeonplaceholder.gif"};
    }
  }

  self.addImage = function(photoIndex) {

    var options = {
      destinationType : Camera.DestinationType.FILE_URI,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $state.go('tab.photoalbum');
      self.closeModal();

      self.images[photoIndex] = {url: imageData};
      self.placeheldgallery[photoIndex] = {url: imageData};
      window.localStorage.images = JSON.stringify(self.images);
    }, function(err) {
      console.log(err);
    });
  };

  return {
    init: init
  };
  
});
