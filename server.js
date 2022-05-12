const express = require("express");
const dotenv = require("dotenv");
//const errorHandler = require("./middleware/error");

const usersRoutes = require("./routes/users");
const HomeRoutes = require("./routes/restaurant");
const PeopleRoutes = require("./routes/people");
const statusRoutes = require("./routes/status");
const zahialgaNemehRoutes = require("./routes/zahialgaNemeh");

dotenv.config({ path: "./config/config.env" });
const database = require("./config/database");
// ------
//var authRouter = require("./routes/login");
// -------Ү
const app = express();
app.use(express.json());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/users", HomeRoutes);
app.use("/api/v1/users", PeopleRoutes);
app.use("/api/v1/users", statusRoutes);
app.use("/api/v1", zahialgaNemehRoutes);
//app.use(errorHandler);
//app.use("/api/v1/users", authRouter);

database.getConnection(function (err, conn) {
  conn.query(
    `     alter EVENT reset
           ON SCHEDULE
           EVERY 1 HOUR
            DO
                update orders
                set status=0 
                where created_at < date_sub(now(),interval 5 hour) 
                  and (status=1 ) ;`,
    function (err, result, fields) {
      if (err) throw err;
      //console.log(result);
      // res.status(200).json({ result });
      message: "24 tsag ongorson tul status 0 bolov";
    }
  );
});

app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);

// app.post("/", (req, res, next) => {
//   res.json(req.body.password);
// });

//pp.post("/auth", function (request, response) {

// app.listen(
//   process.env.PORT,
//   console.log(`running on port ${process.env.PORT}`)
// );

//-----------------------------------------
// const express = require("express");
// const dotenv = require("dotenv");
// var path = require("path");
// dotenv.config({ path: "./config/config.env" });
// const db = require("./config/database");
// //const database = require("./config/database");
// const app = express();
// // Router оруулж ирэх
// const injectDb = require("./middleware/injectDB");

// //body parse
// app.use(express.json());
// //app.use(fileupload());
// app.use(injectDb(db));
// //app.use("/api/v1/users", usersRoutes);
// //app.use(errorHandler);

//-----------------------------------------------

// db.sequelize
//   .sync()
//   .then((result) => {
//     console.log("sync hiigdlee...");
//   })
//   .catch((err) => console.log(err));

// const express = require("express");
// const dotenv = require("dotenv");
// var path = require("path");
// dotenv.config({ path: "./config/config.env" });
// const db = require("./config/database");
// const app = express();

// db.connect((error) => {
//   if (error) {
//     console.log("error");
//   } else {
//     console.log("MySQl connect");
//   }
// });
