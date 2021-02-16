import * as express from "express";
import router from "./router";
import { createConnection } from "typeorm";

const app = express();

createConnection().then((connection) => {
  app.use(express.json());
  app.use(router);
});

app.listen(8888);
