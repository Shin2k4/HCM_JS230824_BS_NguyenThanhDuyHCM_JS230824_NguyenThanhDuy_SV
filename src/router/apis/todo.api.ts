import express from 'express';
import { todocontroller } from '../../controller/todo.controller';
const router = express.Router();
router.post('/', todocontroller.create)
router.get('/', todocontroller.getall)
router.delete('/:id', todocontroller.delete)
router.put('/:id', todocontroller.update)
export default router;