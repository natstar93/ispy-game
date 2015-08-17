angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/cluemodal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  var monuments = {
    shard: {name: 'The Shard',
            clue1: 'Its pointy',
            clue2: 'TBC',
            clue3: 'TBC',
            image: 'To add image',
            map: 'To add map'
            },
    bigben: {name: 'Big Ben',
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

.controller('PhotoAlbumCtrl', function($scope) {});
