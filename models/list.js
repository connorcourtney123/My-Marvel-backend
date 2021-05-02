'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.list.belongsTo(models.user)
      models.movie.belongsToMany(models.list, {through: 'movies_list'})
    }
  };
  list.init({
    userId: DataTypes.INTEGER,
    list: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'list',
  });
  return list;
};