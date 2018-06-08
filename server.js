// server.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

var db = require('./src/api/providers/puppyProvider');

router.get('/puppies', db.getAllPuppies);
router.get('/puppies/:id', db.getSinglePuppy);
router.post('/puppies', db.createPuppy);
router.put('/puppies/:id', db.updatePuppy);
router.delete('/puppies/:id', db.removePuppy);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
    console.log('getting something!');
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
var port = process.env.PORT || 8080;

// models.sequelize.sync().then(() => {
//     app.listen(3000, () => {
//       console.log('Your Server is up and running');
//     });
//   });

app.listen(port);

console.log('Magic happens on port', port);


//var Bear = require('./src/api/models/bear');

// // on routes that end in /bears
// // ----------------------------------------------------
// router.route('/bears')

//     // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {

//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)

//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err) {
//                 res.send(err);
//             }

//             res.json({ message: 'Bear created!' });
//         });

//     })

//     .get(function(req, res) {
//         Bear.find(function(err, bears) {
//             if (err)
//                 res.send(err);

//             res.json(bears);
//         });
//     });

//   router.route('/bears/:bear_id')

//     // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
//     .get(function(req, res) {
//         Bear.findById(req.params.bear_id, function(err, bear) {
//             if (err)
//                 res.send(err);
//             res.json(bear);
//         });
//     });
