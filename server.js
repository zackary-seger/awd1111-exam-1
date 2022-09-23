import * as dotenv from 'dotenv';
dotenv.config()

import Debug from 'debug';
const debugMain = Debug("app:server");
const debugError = Debug("app:error");
import express from 'express';

// import { mpgRouter } from './routes/api/mpgCalc.js';
// import { tempRouter } from './routes/api/tempConverter.js';
// import { incomeRouter } from './routes/api/incomeTaxConverter.js';
// import { interestRouter } from './routes/api/interestCalc.js';

// Create Application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register Routes
// app.use('/api/user', mpgRouter);
// app.use('/api/bug', tempRouter);
// app.use('/api/user', incomeRouter);
// app.use('/api/bug', interestRouter);
app.use('/', express.static('public', { index: 'index.html'}));

app.get('/', (req, res, next) => {
  debugMain('Home Page');
  res.type("text/plain").send('Home Page');
})

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