'use strict';

/* Controllers */

var personalWebsite = angular.module('personalWebsite', []);

// The InterestListCtrl controller attaches the interest data to the $scope that was injected into our controller function.
personalWebsite.controller('InterestListCtrl', function ($scope) {
  $scope.name = 'World';
  $scope.interests = [
    {'name': 'Programming',
//     'snippet': 'My college curriculum focuses on Java, and I work as a software engineer apprentice at the GE Capital Technology Center in New Orleans. Aside from Java, I have worked with C, C#, Python, HTML, CSS, JavaScript, and AngularJS.',
//     'link': 'https://github.com/Tlmader',
//     'linkText': 'Check out my GitHub profile.',
     'favorite': 1},
    {'name': 'Gaming',
//     'snippet': 'I enjoy role-playing, strategy, and sandbox games. My all-time favorite titles are Guild Wars 2, Civilization V, Minecraft, Terraria and SimCity 4. More recently, I have been playing ANNO 2070, Hearthstone. I\'m pretty hyped for the upcoming expansion for Guild Wars 2 called Heart of Thorns.',
//     'link': 'http://steamcommunity.com/id/tlmader/',
//     'linkText': 'Visit me on Steam.',
     'favorite': 2},
    {'name': 'Visual Art',
//     'snippet': 'I enjoy drawing with pencil and playing with Photoshop. Most of my inspiration is drawn from video games.',
//     'link': 'http://tlmader.deviantart.com/',
//     'linkText': 'View my work on deviantART.',
     'favorite': 3}
  ];
  
  $scope.orderProp = 'favorite';
});