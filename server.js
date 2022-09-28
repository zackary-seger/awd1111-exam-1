import * as dotenv from 'dotenv';
dotenv.config()

import Debug from 'debug';
const debugMain = Debug("app:server");
const debugError = Debug("app:error");
import express from 'express';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { mpgRouter } from './routes/api/mpgCalc.js';
import { tempRouter } from './routes/api/tempConverter.js';
import { incomeRouter } from './routes/api/incomeTaxCalc.js';
import { interestRouter } from './routes/api/interestCalc.js';

// Create Application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register Routes
app.use('/api/mpgCalc', mpgRouter);
app.use('/api/tempConverter', tempRouter);
app.use('/api/incomeTaxCalc', incomeRouter);
app.use('/api/interestCalc', interestRouter);
// app.use('/', express.static('public', { index: 'index.html'}));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// register error handlers
app.use((req, res, next) => {
  debugError(`Sorry, we couldn't find ${req.originalUrl}`);
  res.status(404)
     .json({ error: `Sorry, we couldn't find ${req.originalUrl}`});
});

app.use((err, req, res, next) => {
  debugError(err);
  res.status(err.status || 500)
     .json({ error: err.message});
});

// Listen for Requests
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;
app.listen(port, () => {
  debugMain(`Server running at http://${hostname}:${port}`);
});