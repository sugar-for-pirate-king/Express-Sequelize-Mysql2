'use strict'

module.exports = function(app) {
    var controller = require('../controller/accountDaoImpl');

    app.route('/account/list').get(controller.accounts);
    app.route('/account/:id').get(controller.getById);
    app.route('/account').post(controller.insert);
    app.route('/account').put(controller.update);
    app.route('/account/:id').delete(controller.del);
};
