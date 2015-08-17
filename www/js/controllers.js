angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, $ionicModal, ImageService, $state, $cordovaCamera, $cordovaFile) {

  $scope.imageService = ImageService;

  $ionicModal.fromTemplateUrl('templates/cluemodal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  var monuments = {
    shard: { name: 'The Shard',
             index: 0,
             clue1: 'Its pointy',
             clue2: 'TBC',
             clue3: 'TBC',
             image: 'img/the_shard.gif',
             map: 'img/the_shard_map.gif'
            },
    taxi: { name: 'Black Cab',
            index: 1,
            clue1: 'TAXI!',
            clue2: 'TBC',
            clue3: 'TBC',
            image: 'To add image',
            map: 'To add map'
          },
    bigben: { name: 'Big Ben',
              index: 2,
              clue1: 'Dong',
              clue2: 'TBC',
              clue3: 'TBC',
              image: 'To add image',
              map: 'To add map'
            }
    };

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