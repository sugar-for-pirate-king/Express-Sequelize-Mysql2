var response = require('../model/res');
var transactionDao = require('../dao/transaction-dao-sequelize');
var logger = require('../util/logging/winston-logger');
var util = require('util');

exports.transactions = function(req,res){
    let whereClause = {};
    if (req.query.id){
        whereClause.id = req.query.id;
    }
    if (req.query.type){
        whereClause.type = req.query.type;
    }
    if (req.query.amount){
        whereClause.amount = req.query.amount;
    }
    if (req.query.amountSign){
        whereClause.amountSign = req.query.amountSign;
    }
    if (req.query.account){
        whereClause.account_id =
        req.query.account;
    } 
    
    transactionDao.getAll(function (error, rows){
        if(error){
            logger.info('error while select : ' + error);
            response.err(error,res);
        }else{
            response.ok(rows, res);
        }
    });
};

exports.getById = function(req,res){
    transactionDao.getById(req.params['id'], function(err, data){
        if(err){
            logger.error('error select By Id : ' + err);
            response.err(err,res);
        }else if (data==null){
            response.datanotfound('Data not found : ' + res);
        }else{
            response.ok(data, res);
        }
    });
};

exports.insert = function(req, res){
    transactionDao.insert(req.body, function(err, data){
        if(err){
            logger.info('error call insert : ' + err);
            response.err(err, res);
        }else{
            response.ok('Data insert with Id ' +data.id, res);
        }
    });
};

exports.update = function(req,res){
    // const body = req.body;
    transactionDao.getById(req.body.id, function(err, data){
        if(err){
            logger.info('error call By Id : ' + err);
            response.err(err, res);
        }else if (data==null){
            response.datanotfound('Data not found : ' + res);
        }else{
            transactionDao.update(req.body.id,req.body, function(err,data ){
                if(err){
                    logger.info('error call update : ' + err);
                    response.err(err, res);
                }else{
                    response.ok('Update Data : ' + data.id + ' success', res);
                }
            });
        }
    });
};

exports.del = function(req, res) {
    logger.info(util.format('deleting transaction id %s', req.params['id']));
    transactionDao.getById(req.params['id'], function(err, data){//check account exists
        if(err){
            logger.error('error call getById : '+err);
            response.err(err, res);
        }  else if(data==null){
            response.datanotfound('Data not found', res);
        }else{
            //if exists, continue delete
            transactionDao.del(req.params['id'], function(err, data){
                if(err){
                    logger.error('error call delete : '+err);
                    response.err(error, res);
                } 
                response.ok('Delete Id : ' + data.id + ' success', res);
            });
        }
    });
};