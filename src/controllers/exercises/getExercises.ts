import { Request, Response } from 'express';

export const getExercises = (req: Request, res: Response) => {
	console.log(req.body);
	// @TODO Write get exercises logic here
	return res.status(200).json({ success: 'true', exercises: [] });
};
