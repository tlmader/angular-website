'use strict';

/* jasmine specs for controllers go here */

describe('Ted\'s Website controllers', function() {
	
    describe('InterestListCtrl', function() {
        var scope, ctrl;
	
        // Before each test we tell Angular to load the tedWebsite module.
        beforeEach(module('tedWebsite'));
	
	beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('InterestListCtrl', {$scope:scope});
	}));
  
        // We ask Angular to inject the $controller service into our test function.
        it('should create "interests" model with 3 interests', function() {
            // We verify that the interests array property on the scope contains three records.
            expect(scope.interests.length).toBe(3);
	});
  	
	it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('favorite');
        });
    });
});