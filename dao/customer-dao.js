var connection = require ('../db/conn');

const sqlGetById = 'SELECT * from customer where customer_number = ?';
const sqlGetAll = 'SELECT * from customer';
const sqlInsert = 'INSERT into customer SET ?';
const sqlDelete = 'DELETE from customer where customer_number = ?';
const sqlUpdate = 'UPDATE customer SET ? where customer_number = ?';

exports.getById = function getById(id, callback){
    connection.query(sqlGetById,id , function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows[0]);
        }
    });
};

exports.getAll = function getAll(callback){
    connection.query(sqlGetAll, function(error, rows) {
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows);
        }
    });
};

exports.insert = function insert(data, callback){
    connection.query(sqlInsert,data, function(error, rows){
        if(error) {
          console.log(error);
          return callback(error);
        }else{
            callback(rows)
        }
    });
};

exports.del = function del(id, callback){
    connection.query(sqlDelete, id, function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(rows);
        }
    });
};

exports.update = function update(id, data,callback){
    connection.query(sqlUpdate,[data,id], function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null,rows);
        }
    });
};