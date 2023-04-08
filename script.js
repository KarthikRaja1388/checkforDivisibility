const numbers = [2, 9, 12, 15, 21, 27, 48];

function checkDivisibility(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      continue;
    }
    if (numbers[i] % 3 === 0) {
      console.log(numbers[i]);
    }
  }
}

checkDivisibility(numbers);
