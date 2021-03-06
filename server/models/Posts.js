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

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    }),
    Posts.hasMany(models.Likes, {
      onDelete: "cascade",
    }),
    Posts.hasMany(models.Bookmarks, {
      onDelete: "cascade",
    })
  }

  return Posts
}