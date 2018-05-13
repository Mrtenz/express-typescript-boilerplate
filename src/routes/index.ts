import { Router } from 'express';
import block from './hello-world';

const router = Router();

router.use('/hello-world', block);

export default router;
