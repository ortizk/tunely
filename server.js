// SERVER-SIDE JAVASCRIPT
const db = require('./models/index');
//require express in our app
const express = require('express');
// generate a new express app and call it 'app'
const app = express();
const bodyParser = require('body-parser')
// set EJS as our view engine. This allows us to make dynamic pages.
app.set('view engine', 'ejs');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/albums');

/************
 * DATABASE *
 ************/
/*


Find Me :)

*/

/*
HARD-CODED DATA
What we've done here is mocked up what a database object would hypothetically look like
if we had one. That's why we've included an idea. We're trying to simulate the data so that
when we do hook up the database later, it's a seamless transition.

First get your routes hooked up and the ejS looking the way you want. When you are
ready to proceed with hooking up the database, go to ./models/album to create a schema.
Then, take a look into the seed.js file to populate some starter data.
*/



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints: This means we are expecting an HTML or EJS page to be rendered
 */


app.get('/', function homepage(req, res) {
  db.Album.find(function (err, albums) {
    if (err) {
      console.log('YIKES')
    }
    res.render('index', { albums: albums });

  })

  // This albums variable is the array of objects defined above.
  // TODO: Eventually, this should be replaced with a find() call to your database!
});

// TODO: GET ROUTE for single album (Route has an id in the url. e.g., /:id that can be accessed
// on the request object with req.params.id).

// TODO: POST ROUTE (NOTE: You can submit a post request directly from an HTML form tag
// using the method and action attributes - no need for AJAX!)


/*
 * JSON API Endpoints: This usually means AJAX has been used to call this route
 */

app.get('/api/albums', function (req, res) {
  db.Album.find(function (err, albums) {
    if (err) {
      console.log('index error: ' + err);
      res.sendStatus(500);
    }
    res.json(albums);
  });
})

app.post('/api/albums', function (req, res) {
  let newSubmission = req.body
  db.Album.create(newSubmission, function (err, album) {
    if (err) {
      console.log('something went wrong')
      res.sendStatus(500)
    }
    res.redirect('/')
  })
})

// TODO: DELETE ROUTE (removes/destroys an album in the DB. Needs to be called from AJAX.)

// TODO: PUT ROUTE (edits/updates the info in the DB. Needs to be called from AJAX.)

/**********
 * SERVER *
 **********/
/* Listen on PORT */


/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`App is Locked and Loaded on  port: ${PORT}`);
});



