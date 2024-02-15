'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flightId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'confirmed', 'cancelled'],
      defaultValue: 'pending' 
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};