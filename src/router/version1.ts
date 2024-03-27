import express from 'express';
const router = express.Router();
import todoapi from './apis/todo.api';

router.use('/todo', todoapi);

export default router;