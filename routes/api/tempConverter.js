import Debug from 'debug';
const debugMain = Debug("app:tempConverter");
import express from 'express';

// Create Router
const router = express.Router();
    
// Register Routes
router.post('/', (req, res, next) => {
  const mode = req.body.mode;
  const temp = parseFloat(req.body.temp);

  const FtoC = ((temp - 32) * (5/9)).toFixed(2);
  const CtoF = ((temp * (9/5)) + 32).toFixed(2);

  if (!temp || temp <= 0){
    res.status(400).json({ error: 'Temperature must be a number greater than 0.'});
  } else if (mode == "FtoC") {
    res.send(`Your temperature in Celsius is: ${FtoC}°`);
    debugMain(`Your temperature in Celsius is:  ${FtoC}`);
    console.log("Post Request Confirmed!");
    res.end();
  } else if (mode == "CtoF") {
    res.send(`Your temperature in Fahrenheit is: ${CtoF}°`);
    debugMain(`Your temperature in Fahrenheit is:  ${CtoF}`);
    console.log("Post Request Confirmed!");
    res.end();
  } else {
    res.status(400).json({ error: 'Mode not found. You must choose a valid mode.'});
  }
});

export {router as tempRouter};