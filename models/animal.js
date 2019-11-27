module.exports = (sequelize, Model, DataTypes) =>{
    class Animal extends Model { }

    Animal.init({
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        type: DataTypes.STRING,
        breed: DataTypes.STRING,
        isFed: false,
        isWalked: false,
        isClean: false,
        isPlayed: false,
        adoptReady: false,
        isAdopted: false

    }, { sequelize, modelName: 'animal'})

    return Animal
}