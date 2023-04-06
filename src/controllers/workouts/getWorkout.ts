import { Request, Response } from 'express';
import { Workout } from '../../models/workoutModel';

export const getWorkout = async (req: Request, res: Response) => {
	const id = req.params.id;
	const workout = await Workout.findById(id).exec();
	if (workout===null) {
		res.status(404).json({
			success: false,
			status_code: 'resource_not_found',
		});
	}
	return res.status(200).json({ success: true, workout });
};
