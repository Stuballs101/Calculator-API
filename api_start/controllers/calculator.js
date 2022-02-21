// This is the calculator controller
// It defines an endpoint for the calculator route

// Import router package
const router = require('express').Router();

// Import the calculator service
const calc = require('../services/calculatorService.js');

/* Handle get requests for '/'
/* this is the calculator route
*/
router.get('/', (req, res) => {
    // Send a  response - this app will be a web api so no need to send HTML
    res.json({message: 'try calculator/add?a=5&b=7'});

});


/* Handle get requests for '/add'
/* this endpoint will read two values
/* process the two values
/* then send a response
*/
router.get('/add', (req, res) => {

    // define variables for values
    let numA;
    let numB;

    // read parameters from the querystring - if they exist
    if (typeof req.query.a != 'undefined')
        numA = req.query.a;
    
    if (typeof req.query.b != 'undefined')
        numB = req.query.b;

    // Call the calculatorService add function to perform addition
    const result = calc.add(numA, numB);

    // Send a  response
    res.json(result);

});


/* Handle get requests for '/subtract'
/* this endpoint will read two values
/* process the two values
/* then send a response
*/
router.get('/subtract', (req, res) => {

    // define variables for values
    let numA;
    let numB;

    // read parameters from the querystring - if they exist
    if (typeof req.query.a != 'undefined')
        numA = req.query.a;
    
    if (typeof req.query.b != 'undefined')
        numB = req.query.b;

    // Call the calculatorService subtract function to perform addition
    const result = calc.subtract(numA, numB);

    // Send a  response
    res.json(result);

});

/* Handle get requests for '/multiply'
/* this endpoint will read two values
/* process the two values
/* then send a response
*/
router.get('/multiply', (req, res) => {

    // define variables for values
    let numA;
    let numB;

    // read parameters from the querystring - if they exist
    if (typeof req.query.a != 'undefined')
        numA = req.query.a;
    
    if (typeof req.query.b != 'undefined')
        numB = req.query.b;

    // Call the calculatorService multiply function to perform addition
    const result = calc.multiply(numA, numB);

    // Send a  response
    res.json(result);

});



/* Handle get requests for '/divide'
/* this endpoint will read two values
/* process the two values
/* then send a response
*/
router.get('/divide', (req, res) => {

    // define variables for values
    let numA;
    let numB;

    // read parameters from the querystring - if they exist
    if (typeof req.query.a != 'undefined')
        numA = req.query.a;
    
    if (typeof req.query.b != 'undefined')
        numB = req.query.b;

    // Call the calculatorService divide function to perform addition
    const result = calc.divide(numA, numB);

    // Send a  response
    res.json(result);

});




// export
module.exports = router;


