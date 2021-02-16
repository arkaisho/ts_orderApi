require("dotenv").config();

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
      "build/entity/**/*.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};