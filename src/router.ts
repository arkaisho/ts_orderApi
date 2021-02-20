import * as express from "express";
import orderController from "./controllers/orderController";
import authController from "./controllers/authController";

const app = express();

const router = express.Router();

router.post("/login", authController.login);
router.get("/", authController.verifyJWT, orderController.index);
router.get("/show/:id", authController.verifyJWT, orderController.show);
router.post("/create", authController.verifyJWT, orderController.create);
router.delete("/delete/:id", authController.verifyJWT, orderController.destroy);
router.put("/update/:id", authController.verifyJWT, orderController.update);

export default router;
