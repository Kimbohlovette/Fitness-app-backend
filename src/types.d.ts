export interface WorkoutType {
    title: string;
    description: string;
    exercises: ExerciseType[];
    imageUrl: string;
}


export interface ExerciseType {
    title: string;
    duration :number;
    rest: number;
    description: string;
    imageUrl: string;
}