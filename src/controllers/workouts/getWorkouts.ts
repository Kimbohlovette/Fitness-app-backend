import { Request, Response } from "express";

export const getWorkouts = (req: Request, res: Response) => {
	// @TODO: Write get workouts logic here
	return res.status(200).json({ success: true, workouts: [] });
};
