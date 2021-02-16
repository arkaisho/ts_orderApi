require("dotenv").config();
const path = require('path'); 
module.exports = {
   type: "postgres",
   port: 5432,
   host: process.env.TYPEORM_HOST,
   username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	database: process.env.TYPEORM_DATABASE,

   synchronize: true,
   logging: false,
   entities: [
      path.join(__dirname, '**','entity','*.{ts,js}')
   ],
   migrations: [
      path.join(__dirname, '**','migration','*.{ts,js}')
   ],
   subscribers: [
      path.join(__dirname, '**','subscriber','*.{ts,js}')
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};