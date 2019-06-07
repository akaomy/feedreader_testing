# Project Overview

Unit tests for existing web application that reads RSS feeds that are written against underlying business logic of the application with utilizing knowledge in the event handling and DOM manipulation.


## Tools used

Jasmine 3.3.0


## Test cases

1. RSS feeds are:
    * with defined variables and they are not empty
2. The menu:
    * changes visibility when the menu icon is clicked
    * should display when clicked and hide when clicked again
3. Initial Entries:
    * have at least one entry exist and it's not empty once feed loads
4. New Feed Selection:
    * changes content when a new feed is loaded

  Additional info:
 * No test should be dependent on the results of another
 * Callbacks should be used to ensure that feeds are loaded before they are tested
 * Error handling should be implemented for undefined variables and out-of-bound array access
 * When complete, all of your tests should pass


## Steps to run the tests

1. Clone the repository
2. Inside the project files find `index.html`
2. Open it in your browser
