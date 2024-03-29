const sequelize = require('./connection');
const { Deferrable } = require('sequelize');
const users = require('./userModel').users;
const Sequelize = require('sequelize');
const stories = sequelize.define('stories', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    references: {
      model: users,
      key: 'username',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: { args: false, msg: 'Title is required.' },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: { args: false, msg: 'Title is required.' },
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

module.exports = { stories };
