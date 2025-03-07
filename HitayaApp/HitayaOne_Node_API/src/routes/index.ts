import { Router } from 'express';
import userRoutes from './user';
import AdminRoutes from './admin';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/swagger.json';

const router = Router();

router.use('/user', userRoutes);

router.use('/admin', AdminRoutes);

const options = {
    explorer: true
};

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

export default router;
