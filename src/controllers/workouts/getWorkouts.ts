import { Request, Response } from 'express';
import { Workout } from '../../models/workoutModel';

export const getWorkouts = async (req: Request, res: Response) => {
	const workouts = await Workout.find({});
	res.status(200).json({
		success: "true",
		workouts: workouts,
	});
};
