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
        customer_id: {
            type: type.INTEGER,
            onDelete: 'CASCADE',
            
            references:{
                model: 'customer',
                key: 'customer_id'
            }
        }
    }, {
        tableName: 'account',
        timestamps: false
    })
}