module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    text: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },

  })

  return Comments
}