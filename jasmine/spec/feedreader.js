$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
       /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. */

       /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('has a URL defined defined and it\'s not empty', function () {
           for (let each of allFeeds) {
             expect(each.url).toBeDefined();
             expect(each.url).not.toBe("");
           }
         });

         it('has name defined and it\'s not empty', function () {
           for (let each of allFeeds) {
             expect(each.name).toBeDefined();
             expect(each.name).not.toBe("");
           }
         });
    });

    describe("The menu", function() {
       /* Test that ensures the menu changes
       * visibility when the menu icon is clicked. The menu
       * should display when clicked and hide when clicked again.
       * Tests if the menu-hidden class is removed after clicking the menu
       * Then hides the menu again.
       */
       let menuIcon = document.querySelector('.menu-icon-link');

       it('is hidden by default', function() {
         expect(document.body.classList.contains('menu-hidden')).toBe(true);

       });

        it('is displayed when clicked', function() {
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
          menuIcon.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(false);
          menuIcon.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {
     /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Loads a feed then tests whether a feed (of class entry-link)
     * has been loaded or not
     */
      beforeEach(function(done) {
             loadFeed(2, done);
         });

         it('have at least one entry exist and it\'s not empty once feed loads', function() {
             feed = document.querySelectorAll('.feed .entry');
             expect(feed.firstElementChild).not.toEqual(null);
             expect(feed.length).toBeGreaterThan(0);
         });

    });

    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      let prevFeed;
      let nextFeed;

         beforeEach(function(done) {
            loadFeed(2, function() {
                prevFeed = document.querySelector('.feed').innerText;
                loadFeed(0, function() {
                    nextFeed = document.querySelector('.feed').innerText;
                    done();
                });
            });
         });

         it('changes content when a new feed is loaded', function() {
             expect(prevFeed).not.toBe(nextFeed);
         });
    });
}());
