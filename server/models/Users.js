module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },
    fullName: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },
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