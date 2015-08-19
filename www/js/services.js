angular.module('starter.services', [])

.service('ImageService', function($state, $cordovaCamera, $cordovaFile) {

  var self = this;
  self.images = JSON.parse(window.localStorage.images || '[]');

  self.placeheldgallery = [];
  self.totalScore = 0;

  for(var i=0; i < 7; i++) {
    if(self.images[i]) {
      self.placeheldgallery[i] = self.images[i];
      self.totalScore += monuments[i].points;
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
      self.totalScore += monuments[photoIndex].points;
      window.localStorage.images = JSON.stringify(self.images);
    }, function(err) {
      console.log(err);
    });
  };
});
