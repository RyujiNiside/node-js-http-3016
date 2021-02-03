'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/secret_board',
  {
    logging: false,
    operatorsAliases: false 
  });
const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.TEXT
  },
  content1: {
    type: Sequelize.TEXT
  },
  content2: {
    type: Sequelize.TEXT
  },
  content3: {
    type: Sequelize.TEXT
  },
  content4: {
    type: Sequelize.TEXT
  },
  content5: {
    type: Sequelize.TEXT
  },
  content6: {
    type: Sequelize.TEXT
  },
  content7: {
    type: Sequelize.TEXT
  },
  content8: {
    type: Sequelize.TEXT
  },
  content9: {
    type: Sequelize.TEXT
  },
  postedBy: {
    type: Sequelize.STRING
  },
  trackingCookie: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: true
});

Post.sync();
module.exports = Post;