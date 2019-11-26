module.exports = (sequalize, Model, DataTypes) => {
  class Person extends Model { }

  Person.init({
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  address: DataType.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  petId: DataTypes.INTEGER
  }, { sequelize, modelName: 'Person' })

  return Person
  
}