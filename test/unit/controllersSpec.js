'use strict';

/* jasmine specs for controllers go here */

describe('Gaming Hub controllers', function() {
	
    describe('GameListCtrl', function() {
        var scope, ctrl;
	
        // Before each test we tell Angular to load the gamingHub module.
        beforeEach(module('gamingHub'));
	
	beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('GameListCtrl', {$scope:scope});
	}));
  
        // We ask Angular to inject the $controller service into our test function.
        it('should create "games" model with 3 games', function() {
            // We verify that the games array property on the scope contains three records.
            expect(scope.games.length).toBe(3);
	});
  	
	it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('favorite');
        });
    });
});