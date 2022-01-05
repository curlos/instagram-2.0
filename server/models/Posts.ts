module.exports = (sequelize: any, DataTypes: any) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      ALLOWNULL: false,
    },
    text: {
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