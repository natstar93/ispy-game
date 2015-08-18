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
             points: 10,
             clue1: 'The Shard is 309.6 metres (1,016ft) high.',
             clue2: '95% of the construction materials are recycled.',
             clue3: 'The Shard is the tallest building in Europe.',
             image: 'img/shard.gif.png',
             map: 'img/the_shard_map.gif'
            },
    taxi: { name: 'Black Cab',
            index: 1,
            points: 10,
            clue1: 'A cab must be tall enough to accommodate someone wearing a bowler hat.',
            clue2: 'You are stepping into “shop” each time to you get in a cab.',
            clue3: 'Only around 2% of London\'s black cab drivers are women.',
            image: 'img/taxi.gif',
            map: 'img/london_map.gif.png'
          },
    bigben: { name: 'Big Ben',
              index: 2,
              points: 10,
              clue1: 'The minute hands are 4.2 metres long and weigh about 100kg (including counterweights).',
              clue2: 'The numbers are approximately 60cm long.',
              clue3: 'There are 312 pieces of glass in each clock dial.',
              image: 'img/big_ben.gif.png',
              map: 'img/big_ben_map.gif.png'
            },
    towerbridge: { name: 'London Bridge',
              index: 3,
              points: 10,
              clue1: 'Tower Bridge has been built at a height of around 42 meters above the Thames River.',
              clue2: 'It took eight years, five major contractors and labor of 432 construction workers to complete the Tower Bridge.',
              clue3: 'Tower Bridge was painted red, white and blue in 1977, as a part of the Queen\'s Silver Jubilee celebrations.',
              image: 'img/bridge.gif.png',
              map: 'img/bridge_map.gif.png'
            },
    bus: { name: 'Big red bus',
              index: 4,
              points: 10,
              clue1: 'The first London bus service was established in 1829 and ran between Paddington and Bank. It carried 22 people and was pulled by three horses.',
              clue2: 'The lowest number not used by a London bus is 218.',
              clue3: '\‘Bus\’ is an abbreviation of \‘omnibus\’, the Latin for \‘for all\’, as they were transport for all people.',
              image: 'img/bus.gif.png',
              map: 'img/london_map.gif.png'
            },
    londoneye: { name: 'London Eye',
              index: 5,
              points: 10,
              clue1: 'The London Eye is not a Ferris wheel. It\’s the world\’s tallest cantilevered observation wheel',
              clue2: 'From 2000 to 2012, the London Eye won more than 30 awards, for the best ride, best attraction, experience,design, and many more.',
              clue3: 'The London Eye can carry 800 people each rotation, which is comparable to 11 London red double decker buses.',
              image: 'img/london_eye.gif.png',
              map: 'img/london_map.gif.png'
            },

    gherkin: { name: 'The Gherkin',
              index: 6,
              points: 10,
              clue1: 'It is located on the street of that name, in the City of London, London\’s financial district.',
              clue2: 'A bar on the building\’s top floor offers spectacular views over London.',
              clue3: 'The Gherkin has 18 passenger lifts, reaching speeds of six metres per second.',
              image: 'img/mary.gif.png',
              map: 'img/axe_map.gif.png'
            },

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
