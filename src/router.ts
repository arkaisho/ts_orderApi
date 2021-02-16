import * as express from 'express';
import orderController from './controllers/orderController';

const app = express();

const router = express.Router();

router.get('/',orderController.index);
router.get('/show/:id',orderController.show);
router.post('/create',orderController.create);
router.delete('/delete/:id',orderController.destroy);
router.put('/update/:id',orderController.update);

export default router;