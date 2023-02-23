const bcrypt = require("bcryptjs");
const express = require('express');
const { connection } = require("../utils/connection")
const jwt = require("jsonwebtoken");
const errorHandler = require('../middleware/errorhandler')

const readall = async (req, res) => {
  try {
    const [result, fields] = await connection.promise().query("select * from user")
    console.log(result);
    res.send(
      result
    )
  }
  catch (err) {
    new errorHandler(401, false, ` you have an error : ${err.message}`, {}, res);
  }

}

const read = async (req, res, next) => {
  try {
    id = req.params.id;
    let sql = "SELECT * FROM user WHERE id = " + id + "";
    const [result, field] = await connection.promise().query(sql);
    res.send({
      success: true,
      message: "Run successfully",
      result
    })
  }
  catch (err) {
    new errorHandler(401, false, ` you have an error : ${err.message}`, {}, res);
  }
}

const update = async (req, res, next) => {
  try {
    Id = req.params.Id;
    Email = req.body.Email;
    phone = req.body.phone;
    user_name = req.body.user_name
    let sql ="update user set Email=?, phone=?, user_name=? where Id= ?";
    const value = [Email, phone, user_name, Id]
    const [result, field] = await connection.promise().query(sql, value);
    res.send({
      success: true,
      message: "Run successfully",
      result
    })
  }
  catch (err) {
    new errorHandler(401, false, ` you have an error : ${err.message}`, {}, res);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    let sql = "DELETE FROM user WHERE id = " + req.params.id + "";
    const [result, field] = await connection.promise().query(sql);
    res.send({
      success: true,
      message: "Run successfully",
      result
    })
  }
  catch (err) {
    new errorHandler(401, false, ` you have an error : ${err.message}`, {}, res);
  }
};

const create= async (req, res, next)=> {
  try{
    email = req.body.Email;
    phone = req.body.phone;
    user_name = req.body.user_name;
    password = req.body.password;

    bcrypt.hash(password, 10,async (err, hash)=> {
      let sql = "INSERT INTO user (Email,password,phone,user_name) VALUES (?,?,?,?)";
      let values = [email, hash, phone, user_name];
      // console.log(values);
      const [result,fields]= await connection.promise().query(sql, values) 
        res.send(result);
    }) 
  }
  catch(err){
    new errorHandler(401, false, ` you have an error : ${err.message}`, {}, res);
}
};

const login = async (req, res,next) => {
  try {
    const Email = req.body.Email;
    const password = req.body.password;
    const newPass = bcrypt.hashSync(password, 10);
    const sql = "select * from user where email = ?"
    const value = [Email];
    const [rows, fields] = await connection.promise().execute(sql, value);
    if (rows.length !== 0) {
      const compare = await password.localeCompare(newPass);
      if (compare) {
        let token = jwt.sign(
          { Email: Email, password: password }, "secretkeyappearshere",
          { expiresIn: "1h" }
        )
        res.send({
          message: "login successful",
          data: token
        });

      }
      else {
        res.send({
          message: 'wrong password'
        });
      }
    }
    else {
      res.send({
        message: "user doesn't exist"
      });
    }
  }
  catch (err) {
    new errorHandler(401, false, ` you have an error : ${err.message}`, {}, res);
  }
};

module.exports = { readall, read, update, deleteUser, create, login };