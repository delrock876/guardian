module.exports = (sequalize, Model, DataTypes) =>{
    class Item extends Model { }

    Animal.init({
        name: DataTypes.STRING,
        isFed: DataTypes.BOOLEAN,
        isWalked: DataTypes.BOOLEAN,
        isClean: DataTypes.BOOLEAN,

    }, { sequelize, modelName: 'animal'})
    
    return Animal
}