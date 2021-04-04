# javascript-challenge

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and the credulous folks at `ALIENS-R-REAL` have collected all of the eyewitness reports they could to prove it! All they need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... the collection is too large to search through manually. Even their most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's where I come in. I wrote some code that creates a table dynamically based upon their [prized dataset](static/js/data.js). Users also need to be able to filter the table data for specific values. There's a catch though... ALIENS-R-REAL only uses pure JavaScript, HTML, and CSS, and D3.js on their web pages. They are the only coding languages which can be trusted, apparently.

## The Mission: Automatic Table and Date Search 

* First, I created a basic HTML web page using bootstrap.

* Then, using the UFO dataset provided in the form of an array of JavaScript objects, I wrote code that appends a table to the web page and adds rows of data for each UFO sighting.

  * Each sighting has information for `date/time`, `city`, `state`, `country`, `shape`, and `comments`.

* Finally, I allow a user to sort sightings by date using a form in my HTML document and JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input. The html table is then rerendered to show only the filtered data.