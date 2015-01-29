describe('HobbyListCtrl', function() {
  
  // Before each test we tell Angular to load the personalWebsite module.
  beforeEach(module('personalWebsite'))

  // We ask Angular to inject the $controller service into our test function.
  it('should create "hobbies" model with 3 hobbies', inject(function($controller) {
	  
    // We use $controller to create an instance of the HobbyListCtrl.
	var scope = {}, ctrl = $controller('HobbyListCtrl', {$scope:scope});
	
	// We verify that the hobbies array property on the scope contains three records.
	expect(scope.hobbies.length).toBe(3);
  });

});
