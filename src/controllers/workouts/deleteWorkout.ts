import { Request, Response } from 'express';

export const deleteWorkout = (req: Request, res: Response) => {
	const id = req.body.id;
	// @TODO: Write delete workout logic in here
	return res.status(200).json({ sucess: true, deletedId: 1 });
};
