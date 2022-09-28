import Debug from 'debug';
const debugMain = Debug("app:mpgCalc");
import express from 'express';

// Create Router
const router = express.Router();
    
// Register Routes
router.post('/', (req, res, next) => {
  const miles = parseFloat(req.body.miles);
  const gallons = parseFloat(req.body.gallons);

  if (!miles || miles <= 0){
    res.status(400).json({ error: 'Miles must be a number greater than 0.'});
  } else if (!gallons || gallons <= 0) {
    res.status(400).json({ error: 'Gallons must be a number greater than 0.'});
  } else {
    const mpg = (miles / gallons).toFixed(2);
    debugMain(`Your average MPG was:  ${mpg}`);
    res.send(`Your average MPG was: ${mpg}`);
    console.log("Post Request Confirmed!");
    res.end()
  }
});

export {router as mpgRouter};