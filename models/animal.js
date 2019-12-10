module.exports = (sequelize, Model, DataTypes) =>{
    class Animal extends Model { }

    Animal.init({
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        age: DataTypes.INTEGER,
        type: DataTypes.STRING,
        breed: DataTypes.STRING,
        isFed: {type: DataTypes.BOOLEAN, defaultValue: false},
        isWalked: {type: DataTypes.BOOLEAN, defaultValue: false},
        isClean: {type: DataTypes.BOOLEAN, defaultValue: false},
        isPlayed: {type: DataTypes.BOOLEAN, defaultValue: false},
        adoptReady: {type: DataTypes.BOOLEAN, defaultValue: false},
        isAdopted: {type: DataTypes.BOOLEAN, defaultValue: false},
        adoptName: DataTypes.STRING

    }, { sequelize, modelName: 'animal'})

    return Animal
}