'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Personal Website', function() {

  describe('Interest list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    var interestList = element.all(by.repeater('interest in interests'));
    var query = element(by.model('query'));

    it('should filter the interest list as a user types into the search box', function() {

      expect(interestList.count()).toBe(3);

      query.sendKeys('programming');
      expect(interestList.count()).toBe(1);

      query.clear();
      query.sendKeys('ing');
      expect(interestList.count()).toBe(2);
    });

    it('should display the current filter value in the title bar', function() {
      query.clear();
      expect(browser.getTitle()).toMatch(/Ted Mader:\s*$/);

      query.sendKeys('Gaming');
      expect(browser.getTitle()).toMatch(/Ted Mader: Gaming$/);
    });
	
    it('should be possible to control interest order via the drop down select box', function() {

      var interestNameColumn = element.all(by.repeater('interest in interests').column('interest.name'));

      function getNames() {
        return interestNameColumn.map(function(elm) {
          return elm.getText();
        });
      }
	
      query.sendKeys('ing'); //let's narrow the dataset to make the test assertions shorter
      
      expect(getNames()).toEqual([
        "Programming",
        "Gaming"
      ]);
      
      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();
      
      expect(getNames()).toEqual([
        "Gaming",
        "Programming"
      ]);
    });
  });
});