// const dotenv = require("dotenv");

const database = require("../config/database");
const jwt = require("jsonwebtoken");
exports.postuser = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  var result = {};
  //router.route("/home").get(home);

  console.log(req.body);
  if (username && password) {
    database.getConnection(function (err, conn) {
      if (err) return res.send(400);
      conn.query(
        `SELECT * 
        FROM users 
        
        WHERE email = ? AND password = ?`,
        [username, password],
        function (error, results, fields) {
          if (results.length > 0) {
            // req.session.loggedIn = true;
            // req.session.username = username;
            //res.redirect("/home");
            // var data = JSON.stringify(results);

            result = {
              status: "success",
              //jwt: token,
              message: "амжилттай нэвтэрлээ",
              data: results,
              //res.json( results)
            };
          } else {
            result = {
              status: "error",
              message: "нэвтрэх нэр эсвэл нууц үг буруу байна",
            };
          }

          res.json(result);
        }
      );
    });
  } else {
    result = {
      status: "error",
      message: "Нэвтрэх нэр нууц үгээ оруулна уу.....",
    };

    res.json(result);
  }
};

// const dotenv = require("dotenv");

// const database = require("../config/database");
// const jwt = require("jsonwebtoken");
// exports.postuser = (req, res, next) => {
//   var username = req.body.username;
//   var password = req.body.password;
//   var result = {};
//   console.log(req.body);
//   if (username && password) {
//     database.getConnection(function (err, conn) {
//       if (err) return res.send(400);
//       conn.query(
//         "SELECT * FROM users WHERE mail = ? AND password = ?",
//         [username, password],
//         async function (error, results, fields) {
//           if (results.length > 0) {
//             console.log(JSON.stringify(results));

//             var data = JSON.stringify(results);

//             //var secret = "TOPSECRETTTTT";
//             var now = Math.floor(Date.now() / 1000),
//               iat = now - 10,
//               jwtId = Math.random().toString(6).substring(7);
//             var payload = {
//               iat: iat,
//               jwtid: jwtId,
//             };
//             await jwt.sign(
//               payload,
//               process.env.JWT_SECRET,
//               { expiresIn: process.env.JWT_EXPIRESIN },
//               function (err, token) {
//                 if (err) {
//                   console.log("Алдаа гарлаа");
//                   console.log(err);
//                   return false;
//                 } else {
//                   if (token != false) {
//                     result = {
//                       //results: { status: "true" },
//                       token: token,
//                       data: data,
//                     };
//                   } else {
//                     result = {
//                       results: { status: "error" },
//                       message: "token алдаа гарлаа",
//                     };
//                   }
//                 }
//               }
//             );

//             //-----------
//           } else {
//             result = {
//               status: "error",
//               message: "нэвтрэх нэр эсвэл нууц үг буруу байна",
//             };
//           }

//           res.json(result);
//         }
//       );
//     });
//   } else {
//     result = {
//       status: "error",
//       message: "Нэвтрэх нэр нууц үгээ оруулна уу.....",
//     };

//     res.json(result);
//   }
// };
