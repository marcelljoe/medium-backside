'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    
    comments.belongsTo(models.users, {
      foreignKey: "user_id"
    });
    comments.belongsTo(models.articles, {
      foreignKey: "article_id"
    });

  };
  return comments;
};