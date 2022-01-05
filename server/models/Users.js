module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },
    password: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    }
  })

  // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   }),
  //   Users.hasMany(models.Comments, {
  //     onDelete: "cascade",
  //   })
  // }

  return Users
}