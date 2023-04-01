import { Request, Response } from 'express';

export const deleteExercise = (req: Request, res: Response) => {
	console.log(req.params);
	// @TODO Write delete logic here
	return res.status(200).json({ success: 'true', deletedId: req.params.id });
};
