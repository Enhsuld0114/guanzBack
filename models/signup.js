// const database = require("../config/database");

// exports.postsignup = (req, res, next) => {
//   var ovog = req.body.ovog;
//   var name = req.body.name;
//   var phone = req.body.phone;
//   var mail = req.body.mail;
//   var password = req.body.password;

//   var result = {};
//   if (ovog && name && phone && mail && password) {
//     console.log(req.body);
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (mail.match(mailformat)) {
//       database.getConnection(function (err, conn) {
//         if (err) return res.send(400);
//         let sql = "INSERT INTO users SET ?";
//         var post = {
//           ovog: req.body.ovog,
//           name: req.body.name,
//           phone: req.body.phone,
//           email: req.body.mail,
//           password: req.body.password,
//         };
//         conn.query(sql, post, (err, res1) => {
//           console.log(req.body);
//           if (err) {
//             throw err;
//             result = {
//               status: "error",
//               message: "Таны бүртгэл амжилтгүй боллоо..",
//             };
//             res.send(result);
//           } else {
//             result = {
//               status: "success",
//               message: "амжилттай бүртгэгдлээ",
//             };

//             res.send(result);
//           }
//         });
//       });
//     } else {
//       result = {
//         status: "error",
//         message: "Таны бүртгэл амжилтгүй боллоо..",
//       };
//     }
//   } else {
//     result = {
//       status: "error",
//       message: "Бүгдийг оруулах шаардлагатай.....",
//     };

//     res.json(result);
//   }
// };

const database = require("../config/database");

exports.postsignup = (req, res, next) => {
  var ovog = req.body.ovog;
  var name = req.body.name;
  var phone = req.body.phone;
  var mail = req.body.mail;
  var password = req.body.password;

  var result = {};
  if (ovog && name && phone && mail && password) {
    console.log(req.body);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      database.getConnection(function (err, conn) {
        if (err) return res.send(400);
        let sql = "INSERT INTO users SET ?";
        var post = {
          ovog: req.body.ovog,
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.mail,
          password: req.body.password,
        };
        conn.query(sql, post, (err, res1) => {
          console.log(req.body);
          if (err) {
            throw err;
            result = {
              status: "error",
              message: "Таны бүртгэл амжилтгүй боллоо..",
            };
            res.send(result);
          } else {
            result = {
              status: "success",
              message: "амжилттай бүртгэгдлээ",
            };

            res.send(result);
          }
        });
      });
    } else {
      result = {
        status: "error",
        message: "Таны бүртгэл амжилтгүй боллоо..",
      };
    }
  } else {
    result = {
      status: "error",
      message: "Бүгдийг оруулах шаардлагатай.....",
    };

    res.json(result);
  }
};
