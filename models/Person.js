module.exports = (sequelize, Model, DataTypes) => {
  class Person extends Model { }

  Person.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  age: DataTypes.INTEGER,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  petId: DataTypes.STRING
  }, { sequelize, modelName: 'person' })

  return Person
}

