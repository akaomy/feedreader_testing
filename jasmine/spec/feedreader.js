$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('has a URL defined defined and it\'s not empty', function () {
           for (let each of allFeeds) {
             expect(each.url).toBeDefined();
             // also check if it is a string
             expect(each.url).not.toEqual(null);
           }
         });

         it('has name defined and it\'s not empty', function () {
           for (let each of allFeeds) {
             expect(each.name).toBeDefined();
             // also check if it is a string
             expect(each.name).not.toEqual(null);
           }
         });
    });


    describe("The menu", function() {
       let isHidden = document.querySelector('.menu-hidden').className;
       let menuIcon = document.querySelector('.menu-icon-link');

       // checks if menu is hidden by default
       it('is hidden by default', function() {
         expect(isHidden).toBe('menu-hidden');
       });

        // checks if class disappears once burger icon gets clicked
        it('is displayed when clicked', function() {
          menuIcon.click();
          expect(document.body.className).not.toContain(isHidden);
        });

        // checks if class appears once burger icon gets clicked
        // it('is hidden when clicked second time', function() {
        //   menuIcon.click();
        //   expect(document.body.className).toContain(isHidden);
        // });
    });



    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */

    });

    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
    });
}());
