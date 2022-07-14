import { Router } from 'express';
import plantController from '../controller/plant.controller';

const router = Router();

router.get('/', plantController.getPlants);

export default router;
