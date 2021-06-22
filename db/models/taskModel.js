const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    //   unique: true,
    },

    priority: {
      type: DataTypes.STRING,
      allowNull: false,
      defualtValue: "middle",
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defualtValue: false,
      },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },

    deadline: {
      type: DataTypes.DATEONLY,
    },
  });


  SequelizeSlugify.slugifyModel(Task, {
    source: ["name"],
  });

  return Task;
};