# JavaScript Unexpected NaN Bug

This repository demonstrates a common yet subtle error in JavaScript: unexpected `NaN` results when a function is called with fewer arguments than declared.  The `bug.js` file contains the faulty code. The `bugSolution.js` demonstrates how to fix it using default parameter values. 

## Bug Description
In JavaScript, functions are flexible in their parameter handling. However, when a function expects specific arguments and receives fewer, it can lead to unexpected behaviors.  In this case, the addition operation tries to add a number to `undefined`, resulting in `NaN` (Not a Number).