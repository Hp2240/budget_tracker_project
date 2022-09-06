'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.User, { foreignKey: 'userId' })
      Account.hasMany(models.Transaction, { foreignKey: 'accountId' })
    }
  }
  Account.init(
    {
      bankName: DataTypes.STRING,
      accountNumber: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Account',
      tableName: 'accounts'
    }
  )
  return Account
}
