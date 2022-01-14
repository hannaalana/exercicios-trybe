/* const collection = [1, 2, 3, 4, 5];

const sumNumbers = collection.reduce((accumulator, number) => {
    console.log(accumulator); // 1 3 6 10
    return accumulator + number;
  });
console.log(sumNumbers); // 15 */

const numbers = [50, 85, -30, 3, 15];

const getBigger = ((bigger, number) => {
    console.log(bigger);
    return ((bigger > number) ? bigger : number);
});

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85