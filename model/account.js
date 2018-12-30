
module.exports = (sequelize, type) =>{
    return sequelize.define('account',{
        accountNumber: {
            field:'account_number',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        openDate:{
            field:'open_date',
            type: type.DATE
        },
        balance: {
            field:'balance',
            type: type.DOUBLE
        },
        customerNumber: {
            field : 'customer_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            
            references:{
                model: 'customer',
                key: 'customerNumber'
            }
        }
    }, {
        tableName: 'account',
        timestamps: false
    })
}