import { Request, Response } from 'express';
import mongoClient from '../../mongoDB.config';
import { title } from 'process';

export const getWorkouts = (req: Request, res: Response) => {
	// @TODO: Write get workouts logic here
	try {
		const database = mongoClient.db('fitnessDB');
		const workouts = database.collection('workouts');
		console.log(workouts.find({}).toArray());
		return res.status(200).json({ success: true, workouts: [] });
	} finally {
	}
};
