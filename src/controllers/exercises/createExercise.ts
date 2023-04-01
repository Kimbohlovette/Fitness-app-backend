import { Request, Response } from "express";

export const createExercise = (req: Request, res: Response) => {
    console.log(req.body);
    // @TODO Write create logic here
	return res.status(200).json({ success: 'true', exerciseId: req.body.id });
};
