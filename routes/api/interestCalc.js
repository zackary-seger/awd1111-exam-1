import Debug from 'debug';
const debugMain = Debug("app:interestCalc");
import express from 'express';

// Create Router
const router = express.Router();
    
// Register Routes
router.post('/', (req, res, next) => {
  const interestRate = parseFloat(req.body.interestRate);
  const principal = parseFloat(req.body.principal);
  const totalYears = parseFloat(req.body.totalYears);
  if (!principal || principal <= 0) {
    res.status(400).json({ error: 'Principal must be a number greater than zero.'});
  }
  if (!interestRate || interestRate <= 0 || interestRate > 100) {
    res.status(400).json({ error: 'Interest Rate must be a number greater than zero, but less than or equal to 100.'});
  }
  if (!totalYears || totalYears <= 0 || totalYears > 50) {
    res.status(400).json({ error: 'Years must be a number greater than zero, but less than or equal to 50.'});
  }

  const finalAmount = (principal * ((1 + interestRate / 100 / 12) ** (totalYears * 12))).toFixed(2);

  res.send(`Your final total is: $${finalAmount}`);
  debugMain(`Your final total is:  $${finalAmount}`);
  console.log("Post Request Confirmed!");
  res.end()
});

export {router as interestRouter};