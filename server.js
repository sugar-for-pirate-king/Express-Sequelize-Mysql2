var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var logger = require("./util/logging/winston-logger");

app.use(morgan('combined',{ "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");

var customerRoutes = require('./routes/customer_routes');
customerRoutes(app);

var accountRoutes = require('./routes/account_routes');
accountRoutes(app);

app.listen(port);
logger.info("Learn Node JS With Reza, RESTful API server started on: " + port);