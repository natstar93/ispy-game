angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, ImageService, $state, $cordovaCamera, $cordovaFile) {
  $scope.imageService = ImageService;
})

.controller('PhotoAlbumCtrl', function($scope, ImageService, $cordovaCamera, $cordovaFile) {
  $scope.imageService = ImageService;
})

.service('ImageService', function($state, $cordovaCamera, $cordovaFile) {

  var self = this;
  self.images = JSON.parse(window.localStorage.images || '[]');

  self.addImage = function(photoIndex) {

    console.log('hello addImage()');

    var options = {
      destinationType : Camera.DestinationType.FILE_URI,
      sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {

      self.images[photoIndex] = {url: imageData};

      window.localStorage.images = JSON.stringify(self.images);

    }, function(err) {
      console.log(err);
    });
  };
});
