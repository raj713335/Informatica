import { Router } from 'express';
import { addUserInterest } from '../controllers/admin';


const router = Router();

router.post('/add-user-interest', addUserInterest);

export default router;