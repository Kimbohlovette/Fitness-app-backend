import { Request, Response } from 'express';
import { Workout } from '../../models/workoutModel';
import { Error } from 'mongoose';

export const deleteWorkout = async (req: Request, res: Response) => {
	const id = req.body.id;
	const deleted = await Workout.deleteOne({ _id: id });
	if (deleted.deletedCount < 1) {
		return res.status(404).json({
			status_code: 'resourse_not_found',
			success: false,
		});
	} else {
		return res.status(201).json({
			status_code: 'delete_document_successful',
			success: true,
		});
	}
};
