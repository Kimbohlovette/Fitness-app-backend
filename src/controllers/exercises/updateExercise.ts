import { Request, Response } from 'express';
export const updateExercise = (req: Request, res: Response) => {
	console.log(req.body);
	// @TODO Write udpate exercise logic here
	return res.status(200).json({ success: 'true', exercise: 'some exercise' });
};
