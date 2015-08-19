angular.module('starter.services', [])

.service('ImageService', function($state, $cordovaCamera, $cordovaFile) {

  var self = this;
  self.images = JSON.parse(window.localStorage.images || '[]');

  self.placeheldgallery = [];
  self.gamescore = 0;
  for(var i=0; i < 6; i++) {
    if(self.images[i]) {
      self.placeheldgallery[i] = self.images[i];
      self.gamescore += 10;
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
      self.images[photoIndex] = {url: imageData};
      self.placeheldgallery[photoIndex] = {url: imageData};
      window.localStorage.images = JSON.stringify(self.images);
    }, function(err) {
      console.log(err);
    });
  };
});
