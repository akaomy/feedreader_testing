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
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('is hidden by default', function() {
         let isHidden = document.querySelector('.menu-hidden').className;
         expect(isHidden).toBe('menu-hidden');
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        // checks if class disappears when we click menuLink
        it('is displayed when clicked', function() {
          let hidingClass = document.querySelector('.menu-hidden').className;
          document.querySelector('.menu-icon-link').click();
          expect(document.body.className).not.toContain(hidingClass);
        });
        // it('hides menu', function() {
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
