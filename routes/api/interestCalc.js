import Debug from 'debug';
import express from 'express';

// Create Router
const router = express.Router();
    
// Register Routes
router.post('/', (req, res, next) => {
  const principal = req.body.principal;
  const interestRate = req.body.interestRate;
  const totalYears = req.body.totalYears;

  const finalAmount = (principal * ((1 + interestRate / 100 / 12) ** (totalYears * 12))).toFixed(2);

  res.send(`Your final total is: $${finalAmount}`);
  console.log("Post Request Confirmed!");
  res.end()
});

export {router as interestRouter};