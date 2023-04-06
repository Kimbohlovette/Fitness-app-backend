import { Request, Response } from 'express';
import { Workout } from '../../models/workoutModel';

export const updateWorkout = async (req: Request, res: Response) => {
	const payload = req.body;
	const id = req.params['id'];
	// @TODO: Write update workout logic here
	let updated = await Workout.findOneAndUpdate({ _id: id }, { ...payload });
	if (!updated) {
		return res.status(404).json({
			success: false,
			status_code: 'resourse_not_found',
		});
	} else {
		return res.status(201).json({ sucess: true, updatedId: id });
	}
};
