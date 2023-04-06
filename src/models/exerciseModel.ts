import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title field cannot be empty.']
	},
	duration: {
		type: Number,
		required: [true, 'Duration field cannot be empty.']
	},
	rest: {
		type: Number,
		required: [true, 'Rest field cannot be empty.']
	},
	description: {
		type: String,
		required: [true, 'descripton field cannot be empty.']
	},
	imageUrl: {
		type: String,
		required: [true, 'imageUrl field cannot be empty.']
	},
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export { ExerciseSchema, Exercise };
