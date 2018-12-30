'use strict'

module.exports = function(app) {
    var controller = require('../controller/customerDaoImpl');

    app.route('/customer/list').get(controller.customers);
    app.route('/customer').post(controller.insertCustomer);
    app.route('/customer/:customerNumber').get(controller.getCustomerById);
    app.route('/customer').put(controller.updateCustomer);
    app.route('/customer/:id').delete(controller.del);
};
