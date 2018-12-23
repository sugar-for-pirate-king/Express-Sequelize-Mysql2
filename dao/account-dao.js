var connection = require('../db/conn');

const sqlGetById = 'SELECT * from account where account_number = ?';
const sqlGetAll = 'SELECT * from account';
const sqlInsert = 'INSERT into account SET ?';
const sqlDelete = 'DELETE from account where account_number = ?';
const sqlUpdate = 'UPDATE account SET ? where account_number = ?';

exports.getById = function getById(id, callback){
    connection.query(sqlGetById, id , function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows[0]);
        }
    });
};

exports.getAllAccount = function getAllAccount(callback){
    connection.query(sqlGetAll, function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows)
        }
    });
};

exports.Insert = function Insert(data, callback){
    connection.query(sqlInsert,data, function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(rows);
        }
    });
};

exports.Del = function Del(id, callback){
    connection.query(sqlDelete, id, function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(rows);
        }
    });
};

exports.Update = function Update(data, id, callback){
    connection.query(sqlUpdate,[data, id], function(error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }else{
            callback(null, rows);
        }
    });
};