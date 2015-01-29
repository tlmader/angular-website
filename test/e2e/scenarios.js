'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Personal Website', function() {

  describe('Hobby list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    var hobbyList = element.all(by.repeater('hobby in hobbies'));
    var query = element(by.model('query'));

    it('should filter the hobby list as a user types into the search box', function() {

      expect(hobbyList.count()).toBe(3);

      query.sendKeys('programming');
      expect(hobbyList.count()).toBe(1);

      query.clear();
      query.sendKeys('game');
      expect(hobbyList.count()).toBe(2);
    });

    it('should display the current filter value in the title bar', function() {
      query.clear();
      expect(browser.getTitle()).toMatch(/Ted Mader:\s*$/);

      query.sendKeys('game');
      expect(browser.getTitle()).toMatch(/Ted Mader: game$/);
    });
  });
});