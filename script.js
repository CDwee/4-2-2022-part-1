// Started at 9:00 4-2-2022

const createUsernames = function(accs) {
  accounts.forEach(function(acc) {
    acc.usernname = acc.owner
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('') 
  })
};
createUsernames(accounts);

// Filter Method
const deposits = movements.filter(function(mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
 
const depositsFor = [];
for (const mov of movements) if(mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = [];
for(const mov of movements) if(mov < 0) withdrawals.push(mov);
console.log(withdrawals);

// Reduce method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur)  => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value 
const max = movements.reduce((acc, mov) => {
  if (acc > mov) 
    return acc;
  else return mov;
}, movements[0]);
console.log(max);

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`
};
calcDisplayBalance(account1.movements);

// Coding challenge #2

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18)
  console.log(humanAges);
  console.log(adults);
  
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);


  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// Stopped first part at 12:15 4-2-2022
