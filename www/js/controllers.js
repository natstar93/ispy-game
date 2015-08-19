angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, $ionicModal, ImageService, ModalService, $state, $cordovaCamera, $cordovaFile) {

  $scope.imageService = ImageService;

  $scope.takePhoto = function() {
    $scope.imageService.addImage($scope.selectedname.index);
  };

  $scope.openModal = function(name) {
    $scope.selectedname = monuments[name];
    $scope.openServiceModal();
  };

  $scope.openServiceModal = function() {
      ModalService
        .init('templates/cluemodal.html', $scope)
        .then(function(modal) {
          modal.show();
        });
    };

  // $scope.closeModal = function() {
  //   $scope.imageService.modal.hide();
  // };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.imageService.modal.remove();
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