const database = require("../config/database");
//-------------------------------------------status 0 iig 1 bolgoh

exports.status = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let NonResid = `${req.params.id}`;
      //   let Resid = `${req.params.id}`;
      conn.query(
        ` UPDATE orders
        SET status='1', created_at= now()
        WHERE status='0' AND restaurants_id=?`,
        [NonResid],

        function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.status(200).json({ success: "амжилттай update хийгдлээ" });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "NonActiveRes сонгоход алдаа гарлаа",
    });
  }
};
//-------------------------------------------update orders useid
exports.Update = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let use_id = `${req.params.useid}`;
      let restaurant_id = `${req.params.res}`;
      //   let Resid = `${req.params.id}`;
      conn.query(
        `UPDATE orders a
        SET use_id=?
        WHERE status='1' and a.restaurants_id=? and created_at = DATE(NOW())`,
        [use_id, restaurant_id],

        function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.status(200).json({ success: "амжилттай use_id orderd oruullaa" });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "status 0  болход алдаа гарлаа",
    });
  }
};
//-------------------------------------------------------------zahialga  button select
exports.select = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let use_id = `${req.params.useid}`;
      conn.query(
        `  select o.use_id, r.name, o.created_at, o.restaurants_id
        from orders o
            inner join restaurants r on o.restaurants_id=r.restaurants_id
        where o.use_id =? and o.status='1' and date(o.created_at)=date(now())`,
        [use_id],

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
      message: "zahialga aldaa",
    });
  }
};

//-------------------------------------ZahialgaTsutslah status

exports.TsutsahStatus = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let NonResid = `${req.params.id}`;
      //   let Resid = `${req.params.id}`;
      conn.query(
        ` UPDATE orders
        SET status='0'
        WHERE status='1' AND restaurants_id=?`,
        [NonResid],

        function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.status(200).json({ success: "амжилттай status 0 боллоо" });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "status 0  болход алдаа гарлаа",
    });
  }
};
//----------------------------tsutslah zahialga delete
exports.tsutslahDelete = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      if (err) return res.send(400);
      let sql = `delete from order_items WHERE res_id=? `;

      conn.query(sql, [req.params.resid], (err, res1) => {
        console.log(req.body);
        if (err) {
          throw err;
          result = {
            status: "error",
            message: " амжилтгүй бүртгэгдлээ..",
          };
          res.send(result);
        } else {
          result = {
            status: "success",
            message: "амжилттай устгагдлаа",
          };

          res.send(result);
        }
      });
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Захиалга устгахад алдаа гарлаа",
    });
  }
};

//???????
exports.time = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      if (err) return res.send(400);
      let sql = `delete from order_items WHERE res_id=? `;

      conn.query(sql, [req.params.resid], (err, res1) => {
        console.log(req.body);
        if (err) {
          throw err;
          result = {
            status: "error",
            message: " амжилтгүй бүртгэгдлээ..",
          };
          res.send(result);
        } else {
          result = {
            status: "success",
          };

          res.send(result);
        }
      });
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "Захиалга устгахад алдаа гарлаа",
    });
  }
};
