// const Sequelize = require("sequelize");
// var db = {};

// const sequelize = new Sequelize(
//   process.env.SEQUELIZE_DATABASE,
//   process.env.SEQUELIZE_USER,
//   process.env.SEQUELIZE_USER_PASSWORD,
//   {
//     host: process.env.SEQUELIZE_HOST,
//     dialect: process.env.SEQUELIZE_DIALECT,
//     define: { freezeTableName: true },
//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 60000,
//       idle: 10000,
//     },
//     operatorAliases: false,
//   }
// );

// const models = [require("../models/course"), require("../models/teacher")];

// models.forEach((model) => {
//   const seqModel = model(sequelize, Sequelize);
//   db[seqModel.name] = seqModel;
// });

// db.sequelize = sequelize;
// module.exports = db;

const mysql = require("mysql");

const database = mysql.createPool({
  host: process.env.DB_HOST,
  database: "lunchtime",
  user: "root",
  password: "password",
});

// database.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Database connected....");
//   }
// });

module.exports = database;
