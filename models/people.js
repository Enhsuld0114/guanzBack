const database = require("../config/database");

exports.people = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let Foodid = `${req.params.id}`;
      let Resid = `${req.params.resid}`;
      conn.query(
        ` SELECT count(oi.user_id), oi.user_id AS userid, u.name, oi.res_id, oi.food_id, oi.created_at
        FROM order_items oi
        LEFT  JOIN users u on oi.user_id = u.users_id 
        WHERE oi.res_id = ? and oi.food_id=? and date(oi.created_at) = DATE(NOW())
        GROUP BY oi.user_id
        ORDER BY count(oi.user_id) DESC ; `,
        [Resid, Foodid],

        function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.status(200).json({ result });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Тухайн хоолыг захиалсан хүмүүсийг харуулахад алдаа гарлаа",
    });
  }
};
////
exports.zuragll = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let Foodid = `${req.params.id}`;
      //let Resid = `${req.params.resid}`;
      var result2 = {};
      conn.query(
        ` select photo,une
        from foods
        where foods_id=? `,
        [Foodid],

        function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.status(200).json({ result });
          // result2={
          //   status: "success",
          //   message: "амжилттай нэвтэрлээ",
          //   data: result,

          // }
          // res.json(result);
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Тухайн хоолны зураг харуулахад алдаа гарлаа",
    });
  }
};

// exports.people= (req, res, next) => {
//   var result1 ={};
//   try {
//     database.getConnection(function (err, conn) {
//       let Foodid = `${req.params.id}`;
//       let Resid = `${req.params.resid}`;
//        let sql1 = conn.query(
//         ` SELECT count(oi.user_id), oi.user_id AS userid, u.name, oi.res_id, oi.food_id, oi.created_at
//         FROM order_items oi
//         LEFT  JOIN users u on oi.user_id = u.users_id
//         WHERE oi.res_id = ? and oi.food_id=? and date(oi.created_at) = DATE(NOW())
//         GROUP BY oi.user_id
//         ORDER BY count(oi.user_id) DESC ; `,
//         [Resid, Foodid],
//       );
//       let sql2 =conn.query(
//         ` select photo
//         from foods
//         where foods_id=? `,
//         [ Foodid],
//       );

//       result1={
//         status: "success",
//         result: sql1,sql2
//       }

//     });
//   } catch (err) {
//     res.status(400).json({
//       success: true,
//       message: "Тухайн хоолыг захиалсан хүмүүсийг харуулахад алдаа гарлаа",
//     });
//   }

// };
