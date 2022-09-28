import Debug from 'debug';
import express from 'express';

// Create Router
const router = express.Router();
    
// Register Routes
router.post('/', (req, res, next) => {
  const miles = req.body.miles;
  const gallons = req.body.gallons;

  const mpg = (miles / gallons).toFixed(2);
  res.send(`Your average MPG was: ${mpg}`);
  console.log("Post Request Confirmed!");
  res.end()
});

export {router as mpgRouter};