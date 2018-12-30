module.exports = (sequelize, type) =>{
    return sequelize.define('transaction',{
        id: {
            field:'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            field : 'type',
            type: type.STRING
        },
        amount: {
            field: 'amount',
            type: type.INTEGER
        },
        amountSign:{
            field: 'amount_sign',
            type: type.STRING
        },
        accountNumber:{
            field: 'account_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            reference:{
                model: 'account',
                key: 'accountNumber'
            }
        }
    }, {
        tableName: 'transaction',
        timestamps: false
    })
}