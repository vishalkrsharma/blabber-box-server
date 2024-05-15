import { Router } from 'express';

import { signin, signup } from '../controllers/auth-controller.js';
import { userVerification } from '../middlewares/auth-middleware.js';

const router = Router();

router.post('/', userVerification);
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
