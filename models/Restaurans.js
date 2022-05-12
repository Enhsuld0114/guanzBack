// //const mongoose = require("mongoose");
// const dotenv = require("dotenv");

//---------------------------------------------ActiveREs
const database = require("../config/database");
exports.home = (req, res, next) => {
  var results = {};
  try {
    database.getConnection(function (err, conn) {
      conn.query(
        `SELECT name,count(user_id),o.restaurants_id,photo
        FROM orders o
              LEFT join restaurants r on o.restaurants_id = r.restaurants_id 
              LEFT join order_items oi on o.orders_id = oi.order_id
        WHERE status= '1' 
                AND date (o.created_at) = DATE(NOW())
        GROUP BY name 
        ORDER BY count(user_id) desc;`,
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
    });
  }
};
//-----------------------------------------------RES_id aar foodName???????
exports.Resfoods = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      let id = `${req.params.id}`;
      conn.query(
        ` Select f.name,r.restaurants_id, count(user_id), foods_id, f.photo, f.une
        from foods f
         LEFT join order_items oi on  oi.food_id= f.foods_id 
         LEFT join orders o on oi.order_id = o.orders_id
        LEFT join restaurants r on f.restaurant_id= r.restaurants_id
        
         WHERE  r.restaurants_id=? 
           
          
         GROUP BY f.name`,
        [id],
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
      message: "food амжилтгүй",
    });
  }
};
//------------------------------------------------------NonActive

exports.NonAcitveRes = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      conn.query(
        `  SELECT name,r.restaurants_id 
              FROM orders o
              LEFT join restaurants r on o.restaurants_id = r.restaurants_id 
        WHERE status= '0' 
        GROUP BY name`,
        function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.status(200).json({ success: true, data: result });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
    });
  }
};

//------------------------------------------------------zahialga

exports.zahialga = (req, res, next) => {
  try {
    database.getConnection(function (err, conn) {
      conn.query(
        `Select*
        from orders
        where status='1' and date(created_at) = DATE(NOW())`,
        function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.status(200).json({ success: true, data: result });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      success: true,
    });
  }
};
