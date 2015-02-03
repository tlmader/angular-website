'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Gaming Hub', function() {

    describe('Game list view', function() {

        beforeEach(function() {
            browser.get('app/gaming-hub.html');
        });

        var gameList = element.all(by.repeater('game in games'));
        var query = element(by.model('query'));

        it('should filter the game list as a user types into the search box', function() {

            expect(gameList.count()).toBe(3);

            query.sendKeys('guild');
            expect(gameList.count()).toBe(1);

            query.clear();
            query.sendKeys('er');
            expect(gameList.count()).toBe(2);
        });

        it('should display the current filter value in the title bar', function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/Gaming Hub:\s*$/);

            query.sendKeys('guild');
            expect(browser.getTitle()).toMatch(/Gaming Hub: guild$/);
        });

        it('should be possible to control game order via the drop down select box', function() {

            var gameNameColumn = element.all(by.repeater('game in games').column('game.name'));

            function getNames() {
                return gameNameColumn.map(function(elm) {
                    return elm.getText();
                });
            }

            query.sendKeys('er'); //let's narrow the dataset to make the test assertions shorter

            expect(getNames()).toEqual([
                "Terraria",
                "Sid Meier\'s Civilization V"
            ]);

            element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

            expect(getNames()).toEqual([
                "Sid Meier\'s Civilization V",
                "Terraria"
            ]);
        });
    });
});