import { Request, Response } from 'express';

export const getWorkout = (req: Request, res: Response) => {
	const id = req.body.id;
	// @TODO: Write get workout logic here
	return res.status(200).json({ success: true, workout: 'someworkout' });
};
