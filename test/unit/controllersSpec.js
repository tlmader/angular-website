describe('InterestListCtrl', function() {
  
  // Before each test we tell Angular to load the personalWebsite module.
  beforeEach(module('personalWebsite'))

  // We ask Angular to inject the $controller service into our test function.
  it('should create "interests" model with 3 interests', inject(function($controller) {
	  
    // We use $controller to create an instance of the InterestListCtrl.
	var scope = {}, ctrl = $controller('InterestListCtrl', {$scope:scope});
	
	// We verify that the interests array property on the scope contains three records.
	expect(scope.interests.length).toBe(3);
  });

});
