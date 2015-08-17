angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPopover) {
  $ionicPopover.fromTemplateUrl('templates/cluepopover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
})

.controller('PhotoAlbumCtrl', function($scope) {});
