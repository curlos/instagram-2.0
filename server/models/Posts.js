module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    images: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },
    caption: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },
    username: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    }
  })

  return Posts
}