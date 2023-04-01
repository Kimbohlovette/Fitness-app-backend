import { Request, Response } from "express";

export const getExercise = (req: Request, res: Response ) => {
    console.log(req.body);
    // @TODO Write get exercise logic here
	return res.status(200).json({ success: 'true', exercise: "some exercise" });
};
