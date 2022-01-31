/**
 * Algo for create a function for fizzbuzz,
 * Step 1 :- Check if number is not a valid number or zero or nagative number
 * Step 1.1 :- If step 1 is truthy , return "please enter correct value"
 * Step 2 :- Iterate a number from 0 to number length
 * Step 3: - Check if number index value is divisible by 3 & 5;
 * Step 3.1 :- If step 3 is truthy, return fizzbuzz
 * Step 4 :- Check if number index value is divisible by 3 ,
 * Step 4.1 :- If step 4 is truthy return fizz
 * Step 5:- Check if number index value is divisible by 5 ,
 * Step 5.1 If step 4 is truthy, return fizz buzz
 */
function checkFizzBuzz(num) {
  const parseNum = parseInt(num);
  if (isNaN(parseNum)) {
    return "Please enter correct value";
  }

  for (var i = 1; i <= parseNum; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i, "Fizz");
    } else if (i % 5 == 0) {
      console.log(i, "Buzz");
    }
  }
  return;
}
console.log(checkFizzBuzz(15));
