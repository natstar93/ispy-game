angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, ImageService, $state, $cordovaCamera, $cordovaFile) {
  $scope.imageService = ImageService;
})

.controller('PhotoAlbumCtrl', function($scope, ImageService, $cordovaCamera, $cordovaFile) {
  $scope.imageService = ImageService;
});