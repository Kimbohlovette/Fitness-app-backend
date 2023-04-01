import { Request, Response } from "express";

export const updateWorkout = (req: Request, res: Response) => {
	const payload = req.body;
	// @TODO: Write update workout logic here
	return res.status(201).json({ sucess: true, updatedId: 1 });
};
