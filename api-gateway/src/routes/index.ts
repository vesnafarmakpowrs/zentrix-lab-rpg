import { Router } from 'express';
import authRoutes from '../../services/account-service/src/routes/auth.routes';
//import characterRoutes from '../../services/character-service/src/routes/character.routes';
//import combatRoutes from '../../services/combat-service/src/routes/combat.routes';

const router = Router();

router.use('/auth', authRoutes);
//router.use('/characters', characterRoutes);
//router.use('/combat', combatRoutes);

export default router;