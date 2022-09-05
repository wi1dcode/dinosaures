const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Dynosaur = sequelize.define("Dynosaur", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scientific: {
      type: DataTypes.STRING,
    },
    appearance: {
      type: DataTypes.STRING,
    },
    disappearance: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
  })

  return Dynosaur
}
