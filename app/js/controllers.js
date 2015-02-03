'use strict';

/* Controllers */

var gamingHub = angular.module('gamingHub', []);

// The GameListCtrl controller attaches the game data to the $scope that was injected into our controller function.
gamingHub.controller('GameListCtrl', function ($scope) {
    $scope.name = 'World';
    $scope.games = [
        {'name': 'Guild Wars 2',
         'snippet': 'This is my favorite MMORPG. It features action-packed combat, an emphasis on cooperative play, and it lacks a subscription fee. New content is released regularly, and an expansion is in the works. It will never hurt to try out this amazing game.',
         'link': 'https://www.guildwars2.com/en/',
         'linkText': 'Visit the Guild Wars 2 website.',
         'favorite': 1},
        {'name': 'Terraria',
         'snippet': 'The 2D world offers lots to be discovered to improve your character and to use in building creation. The combat, exploration, and creativity in Terraria tie-in seamlessly. No matter what type of gamer you are, you will find something enjoyable to do.',
         'link': 'https://www.youtube.com/watch?v=E0scnF8pXfU',
         'linkText': 'Watch this awesome trailer.',
         'favorite': 2},
        {'name': 'Sid Meier\'s Civilization V',
         'snippet': 'My favorite strategy game. The player manages an empire in a randomly-generated world.',
         'link': 'http://www.civilization5.com/',
         'linkText': 'Official Website',
         'favorite': 3}
    ];
  
    $scope.orderProp = 'favorite';
});