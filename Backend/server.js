require('dotenv').config({path: '.env'});

const express = require("express")
const {Sequelize, DataTypes} = require('sequelize');

const app = express()

const sequelize = new Sequelize( process.env.PG_URI,{

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host:"3080",
  dialect:'postgres',
})

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


sequelize.authenticate()
.then(()=>{
  console.log("Connnection to database is successfull!!");
})
.catch((err) =>{
  console.error("Unable to connect to the DB", err);
});

sequelize.sync();

app.listen(3080, () => {
  console.log('nomming at port', 3080);
})

