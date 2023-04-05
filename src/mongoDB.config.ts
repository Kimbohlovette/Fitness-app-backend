/* mongodb+srv://kimbohlovette:35KBqfBFu6t9nT6z@fitnesscoachdb.8a1ynfl.mongodb.net/?retryWrites=true&w=majority  */

import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb+srv://kimbohlovette:35KBqfBFu6t9nT6z@fitnesscoachdb.8a1ynfl.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri);
export default mongoClient;
