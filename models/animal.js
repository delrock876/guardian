module.exports = (sequalize, Model, DataTypes) =>{
    class Animal extends Model { }

    Animal.init({
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        breed: DataTypes.STRING,
        isFed: DataTypes.BOOLEAN,
        isWalked: DataTypes.BOOLEAN,
        isClean: DataTypes.BOOLEAN,
        isPlayed: DataTypes.BOOLEAN,
        adoptReady: DataTypes.BOOLEAN,
        isAdopted: DataTypes.BOOLEAN

    }, { sequelize, modelName: 'Animal'})

    return Animal

    
}