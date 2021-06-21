import * as express from "express";
import router from "./router";
import { createConnection } from "typeorm";
require("dotenv").config();

const app = express();

createConnection().then((connection) => {
  app.use(express.json());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });
  app.use(router);
});

app.listen(process.env.PORT||8888);
