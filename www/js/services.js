angular.module('starter.services', [])

.service('ImageService', function($state, $cordovaCamera, $cordovaFile) {

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

      self.placeheldgallery[photoIndex] = {url: imageData};

      window.localStorage.images = JSON.stringify(self.images);

    }, function(err) {
      console.log(err);
    });
  };
});
