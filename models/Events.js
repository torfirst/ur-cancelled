const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Adjust as needed
    },
    dateOfEvent: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventStatus: {
      type: DataTypes.ENUM('Scheduled', 'PendingCancellation', 'Cancelled'),
      allowNull: false,
      defaultValue: 'Scheduled',
    },
    User_1_hasCancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    User_2hasCancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;
