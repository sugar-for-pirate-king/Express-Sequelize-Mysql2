// 'use strict';

// var response = require('../model/res');
// var connection = require('../db/conn');
// var util = require('util');

// exports.customer = function(req, res) {
//     connection.query('SELECT * FROM customer', function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// };

// exports.insertCustomer = function(req, res) {
//     connection.query('INSERT into customer set ?',req.body, function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// }

// const sql = 'select * from customer where customer_number = ?';
// exports.getCustomerById = function(req, res) {
//     connection.query(sql,req.params['id'], function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// };

// const sqlDel = 'delete from customer where customer_number = ?';
// exports.deleteCust = function(req, res){
//     connection.query(sqlDel, req.params['id'], function (error,rows, fields){
//         if(error){
//             console.log(error)
//         }else{
//             response.ok(rows, res)
//         }
//     });
// };

// exports.index = function(req, res) {
//     response.ok("Hello from the Node JS RESTful side!", res);
// };


// exports.test = function(req, res) {
//     response.ok("Post : "+util.inspect(req.body),res);
// };