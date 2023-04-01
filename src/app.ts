import app from './server';
import express from 'express';



app.use(express.static('./public'));
app.get('/', (req, res) => {
	res.status(200).json({ success: true, status_code: 'fetch_successful'});
});

app.get('/workouts', (req, res) => {
	res.end('Workouts Page');
});


