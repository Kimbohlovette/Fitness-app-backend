import express from 'express';
import { getExercises } from '../controllers/exercises/getExercises';
import { getExercise } from '../controllers/exercises/getExercise';
import { updateExercise } from '../controllers/exercises/updateExercise';
import { deleteExercise } from '../controllers/exercises/deleteExercise';
import { createExercise } from '../controllers/exercises/createExercise';

const router = express.Router();

router.get('/', getExercises);
router.post('/', createExercise);
router.get('/:id', getExercise);
router.put('/:id', updateExercise);
router.delete('/:id', deleteExercise);

export default router;
