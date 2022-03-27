import {config} from 'dotenv';
config({path: './.env'});

export default {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT,
  "define":{
      "timestamps": true,
      "underscored": true
  }
}
