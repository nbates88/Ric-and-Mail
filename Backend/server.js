
require('dotenv').config({path: '.env'});

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize( process.env.PG_URI,{

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host:"127.0.0.1",
  dialect:'postgres',
});


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



