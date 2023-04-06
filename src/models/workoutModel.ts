import mongoose from 'mongoose';
import { ExerciseSchema } from './exerciseModel';

const WorkoutSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title field cannot be empty.']
	},
	imageUrl: {
		type: String,
		required: [true, 'imageUrl field cannot be empty.']
	},
	exercises: {
		type: [ExerciseSchema],
		required: [true, "workout must contain atleast one element."]
	},
	description: {
		type: String,
		required: [true, 'description field cannot be empty.']
	},
});

export const Workout = mongoose.model('Workout', WorkoutSchema);
