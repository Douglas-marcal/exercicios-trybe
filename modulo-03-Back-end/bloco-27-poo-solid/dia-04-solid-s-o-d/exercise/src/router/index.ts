import { Router } from 'express';
import plantRouter from './plant';

const router = Router();

router.use('/plants', plantRouter);

export default router;
