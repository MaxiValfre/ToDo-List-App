'use strict';
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Task extends Model {
    static associate(models) {
      // define association here
    }
  }

  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    archived: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};