$(function() {
    xdescribe('RSS Feeds', function() {
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

    xdescribe("The menu", function() {
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
        it('is hidden when clicked second time', function() {
          menuIcon.click();
          menuIcon.click();
          expect(document.body.className).toContain(isHidden);
        });
    });

    describe('Initial Entries', function() {
      let feed = document.querySelector('.feed');
      let entryLink = document.querySelector('.entry-link');

      beforeEach(function (done){
        loadFeed(2);
        done();
      });
      it('will check if at least one entry exist and it\'s not empty once feed loads', function () {
        expect(feed.firstElementChild).not.toEqual(0);
        expect(entryLink.href).not.toEqual(0);
      });

    });

    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
    });
}());
