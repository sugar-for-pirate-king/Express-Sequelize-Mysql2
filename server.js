var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    morgan = require('morgan');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

var logger = require("./util/logging/winston-logger");

app.use(morgan('combined',{ "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");

var customerRoutes = require('./routes/customer_routes');
customerRoutes(app);

var accountRoutes = require('./routes/account_routes');
accountRoutes(app);

const tra = require('./routes/transaction_routes');
tra(app);

// var cors = require('cors');
// app.use(cors());

app.listen(port);
logger.debug("Learn Node JS With Reza, RESTful API server started on: " + port);