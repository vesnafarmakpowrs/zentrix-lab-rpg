import {Router} from 'express';
import * as characterController from '../controllers/character.controller';
import * as itemController from '../controllers/item.controller';

const router = Router();

router.get('/character', characterController.getAllCharacters);
router.get('/character/{id}', characterController.getCharacterById);
router.post('/character', characterController.createCharacter);

router.get('/items', itemController.getAllItems);
router.post('/items', itemController.createItem);
router.get('/items/{id}', itemController.getItemById);
router.post('/items/post', itemController.grantItem);
router.post('/items/gift', itemController.giftItem);

export default router;