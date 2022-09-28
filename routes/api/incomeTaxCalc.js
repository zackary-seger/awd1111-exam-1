import Debug from 'debug';
const debugMain = Debug("app:mpgCalc");
import express from 'express';

// Create Router
const router = express.Router();

// Register Routes
router.post('/', (req, res, next) => {
  const maritalStatus = req.body.mode;
  const income = parseFloat(req.body.income);

  let calculatedIncomeTax;
  console.log(`${income}`);

  if (maritalStatus == "Single") {
    if (!income) {
      console.log(`We're sorry, your input was invalid. Please enter an income.`);
      res.status(400).json({ error: `We're sorry, your input was invalid. Please enter an income.`});
    } else if (income >= 0 && income <= 9950) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(income * .1);
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 9951 && income <= 40525) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(995 + ((income - 9950) * .12));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 40526 && income <= 86375) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(4664 + ((income - 40525) * .22));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 86376 && income <= 164925) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(14751 + ((income - 86375) * .24));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 164926 && income <= 209425) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(33603 + ((income - 164925) * .32));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 209426 && income <= 523600) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(47843 + ((income - 209425) * .35));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 523601) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(157804.25 + ((income - 523600) * .37));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income <= 0){
        console.log(`We're sorry, your input was invalid. Please try again`);
        res.status(400).json({ error: `We're sorry, your input was invalid. Please enter an income greater than 0.`});
    }
  } else if (maritalStatus == "Married") {
    if (!income) {
        console.log(`We're sorry, your input was invalid. Please enter a marital status.`);
        res.status(400).json({ error: `We're sorry, your input was invalid. Please enter a marital status.`});
    } else if (income >= 0 && income <= 19900) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(income * .1);
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 19901 && income <= 81050) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(1990 + ((income - 19900) * .12));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 81051 && income <= 172750) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(9238 + ((income - 81050) * .22));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 172751 && income <= 329850) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(29502 + ((income - 172750) * .24));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 329851 && income <= 418850) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(67206 + ((income - 329850) * .32));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 418851 && income <= 628300) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(95686 + ((income - 418850) * .35));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income >= 628301) {
        console.log(`Calculating..`);
        calculatedIncomeTax = Math.ceil(168993.50 + ((income - 628300) * .37));
        console.log(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        debugMain(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`);
        res.send(`Thank you, your calculated income tax is: $${calculatedIncomeTax.toFixed(2)}`)
        console.log(`This means your net income after tax is: $${ income - calculatedIncomeTax }`);
    } else if (income <= 0){
        console.log(`We're sorry, your input was invalid. Please try again`);
        res.status(400).json({ error: `We're sorry, your input was invalid. Please enter an income greater than 0.`});
    }
    } else {
      console.log(`We're sorry, your input was invalid. Please enter Single or Married`);
      res.status(400).json({ error: 'Marital status must be Single or Married.'});
    }
    
  });

  
export {router as incomeRouter};
