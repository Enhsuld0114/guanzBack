//-------------------------------------------------Zahialga nemeh
const { format } = require("../config/database");
const database = require("../config/database");
// const now = new date();

exports.zahialgaNemeh = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      if (err) return res.send(400);
      let sql = "INSERT INTO order_items SET created_at = NOW(), ?";
      var post = {
        //order_id: req.body.order_id,
        user_id: `${req.params.id}`,
        res_id: `${req.params.resid}`,
        food_id: `${req.params.foodid}`,

        // created_at: date(format(now, "YYYY-MM-DD hh:mm:ss")),
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

          //console.log("User dat is inserted successfully ");
        } else {
          result = {
            status: "success",
            message: "амжилттай бүртгэгдлээ",
          };

          res.send(result);
        }
        //res.json(result);
      });
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Захиалга нэмэхэд алдаа гарлаа",
    });
  }
};

//--------------------------------------------------zahialga ustgah

exports.zahialgaHasah = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      //let id = `${req.params.id}`;
      if (err) return res.send(400);
      let sql = `delete from order_items WHERE user_id=? and res_id=? and food_id=? LIMIT 1`;
      // var post = {
      //   user_id: `${req.params.id}`,
      //   res_id: `${req.params.resid}`,
      //   food_id: `${req.params.foodid}`,
      // };
      conn.query(
        sql,
        [req.params.id, req.params.resid, req.params.foodid],
        (err, res1) => {
          console.log(req.body);
          if (err) {
            throw err;
            result = {
              status: "error",
              message: " амжилтгүй бүртгэгдлээ..",
            };
            res.send(result);

            //console.log("User dat is inserted successfully ");
          } else {
            result = {
              status: "success",
              message: "амжилттай устгагдлаа",
            };

            res.send(result);
          }
          //res.json(result);
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Захиалга устгахад алдаа гарлаа",
    });
  }
};
