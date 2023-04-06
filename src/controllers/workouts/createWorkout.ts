import { Request, Response } from 'express';
import { Workout } from '../../models/workoutModel';
import { WorkoutType } from '../../types';

export const createWorkout = async (req: Request, res: Response) => {
	const payload: WorkoutType = req.body;
	try {
		const created = await Workout.create(payload);
		return res.status(201).json({ success: true, workoutId: created._id });
	} catch {
		return res
			.status(422)
			.json({ success: false, status_code: 'could_not_create_workout' });
	}
};
