angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, $ionicModal, ImageService, $state, $cordovaCamera, $cordovaFile) {

  $scope.imageService = ImageService;

  $scope.takePhoto = function() {
    $scope.imageService.addImage($scope.selectedname.index);
    setTimeout(function(){
      $scope.closeModal();
    }, 1000);
  }

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
});
