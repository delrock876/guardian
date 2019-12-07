module.exports = (sequelize, Model, DataTypes) => {
  class Person extends Model { }

  Person.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  age: DataTypes.INTEGER,
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  }, { sequelize, modelName: 'person' })

  return Person
}

