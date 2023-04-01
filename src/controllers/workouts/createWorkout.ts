import { Request, Response } from "express";

export const createWorkout = (req: Request, res: Response) => {
	const payload = req.body;
	// @TODO:  Write create exercise logic here
	return res.status(201).json({ success: true, workoutId: 3 });
};
