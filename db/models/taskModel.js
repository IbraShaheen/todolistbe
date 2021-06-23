const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    //   unique: true,
    },
    type:{
      type: DataTypes.STRING,
    },
    details:{
      type: DataTypes.STRING,
    },

    priority: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },

    status: {
        type: DataTypes.BOOLEAN,
        defualtValue: false,
      },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },

    dueDate: {
      type: DataTypes.DATE,
    },
  });


  SequelizeSlugify.slugifyModel(Task, {
    source: ["name"],
  });

  return Task;
};