import express from "express";
import { getWorkouts } from "../controllers/workouts/getWorkouts";
import { createWorkout } from "../controllers/workouts/createWorkout";
import { getWorkout } from "../controllers/workouts/getWorkout";
import { deleteWorkout } from "../controllers/workouts/deleteWorkout";
import { updateWorkout } from "../controllers/workouts/updateWorkout";

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkout);
router.get('/:id', getWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;