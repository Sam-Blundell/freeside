import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	console.log('connection');
	res.send('Hello world!');
});

export default app;

