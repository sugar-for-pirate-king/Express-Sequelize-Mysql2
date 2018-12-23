var accountDao = require ('../dao/account-dao');
var response = require('../model/res');

exports.getAccountById = function(req, res){
    accountDao.getById(req.params['id'], function(err, data){
        if(err){
            console.log('Error call byId : ' +err);
            response.err(err, res);
        }else{
            response.ok(data,res);
        }
    });
};

exports.accounts = function(req, res){
    accountDao.getAllAccount(function(error, rows){
        if(error){
            console.log('Error while select : ' +error);
            response.err(error,res);
        }else{
            response.ok(rows, res);
        }
    });
};

exports.insertAccount = function(req, res){
    accountDao.Insert(req.body, function(err, data){
        if(err){
            console.log('error call insert : ' + err);
            response.err(err, res);
        }else{
            response.ok('Data insert with Id : ' +data.insertId, res);
        }
    });
};

exports.updateAccount = function(req,res){
    accountDao.getById(req.body.account_number,function(err, data){
        if(err){
            console.log('Error call byId : ' +err);
            response.err(err, res);
        }else if (data==null){
            response.datanotfound('Account not found : ' +res);
        }else{
            accountDao.Update(req.body, req.body.account_number, function(err, data){
                if(err){
                    console.log('Error call update : ' + err);
                    response.err(err, res);
                }
                    response.ok('Update data : ' +data.message , res);
            });
        }   
    });
};

exports.Del = function(req,res){
    accountDao.Del(req.params['id'], function(err, data){
        if(err){
            console.log('Error call getByid : ' + err);
            response.err(err, res);
        }else if(data==null){
            response.datanotfound('Account not found :' + res);
        }else{
            accountDao.Del(req.params['id'], function(err, data){
               if(err){
                console.log('Error call delete :' + err);
                response.err(error,res);
               }
               response.ok(data,res);
            });
        }
    });
};