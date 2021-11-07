/*Ex. 1

Given an age, figure out whether someone is a baby(1 month - 12 months), toddler (1 year - 2 years),
child(3 years - 12 years ), teenager(13 years - 17 years), or adult(18 years and more ). Also check that age in months is between 1 and 12.*/

function stages(age, time){
  if(time === 'years'){
    if(age >= 1 && age <= 2){
      return 'toddler';
    }
    else if(age >= 3 && age <= 12){
      return 'child';
    }
    else if(age >= 13 && age <=17){
      return 'teenager';
    }
    else{
      return 'adult'
    }
  }
  else if(time === 'months'){
    if(age >= 1 && age <= 12){
      return 'baby';
    }
    else{
      return 'Invalid value'
    }
  }
}
console.log(stages(45, 'years'))
console.log(stages(3, 'years'))
console.log(stages(8, 'months'))

/*Ex. 2

Percentage marks obtained by a student in three exams are to be entered into a computer.
An indication of Pass or Fail is given out after the three marks are entered. The criteria for passing are as follows:

a. A  student passes if all three examinations are passed.
b. Additionally a student may pass if only one subject is failed but the overall isaverage greater than or equal to 50. The pass mark for an individual subject is 40.*/

function passOrNot(exam1, exam2, exam3){
  if(exam1 >= 40 && exam2 >= 40 && exam3 >= 40){
    return 'Passed';
  }
  else if((exam1 + exam2 + exam3) / 3 >= 50){
    return 'Passed';
  }
  return 'Not passed';
}

console.log(passOrNot(65, 70, 60));
console.log(passOrNot(10, 85, 75));
console.log(passOrNot(35, 25, 40));
console.log(passOrNot(20, 40, 40));

/*Ex. 3

Find the sign of the product of three numbers without a multiplication operator. Display the specified sign.*/

function signOfProduct(num1, num2, num3){
  let arr = [num1, num2, num3];
  let product = arr.reduce((previous, item) => previous * item);
  if(product === 0){
    return 'unsigned';
  }
  else if(product > 0){
    return '+';
  }
  return '-';
}
console.log(signOfProduct(-14, 5, 0))
console.log(signOfProduct(-8, 9, -6))
console.log(signOfProduct(4, 19, -2))

/*Ex. 4

Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations: + 𝑏𝑥 + 𝑐 = 0. (Hint: use Math.pow or Math.sqrt).*/

function discriminant(a, b, c){
  if(a === 0){
    return 'Enter valid constans';
  }
  let d = (b * b) - (4 * a * c);
  if(d < 0){
    return 'Solution does not exists';
  }
  else if(d === 0){
    let x = -b / (2 * a);
    return `Solution is ${x}`
  }
  let x1 = (-b - Math.sqrt(d)) / (2 * a);
  let x2 = (-b + Math.sqrt(d)) / (2 * a);
  return `Solutions are ${x1} and ${x2}`;
}

console.log(discriminant(1, 2, 1))
console.log(discriminant(0, 4, -5))
console.log(discriminant(3, -8, 12))
console.log(discriminant(5, -13, 6))

/*Ex. 5

Write a program that reads two strings for playing the game of Rock-Paper-Scissors.
If the strings entered by the user are not  'Paper', 'Rock' or 'Scissors', the program keeps on prompting the user to enter new values.
If valid strings are inserted, repeat the loop, until one of the sides wins. (You can use alert instead of console.log).*/

function game(enter1, enter2){
  if(enter1 === null && enter2 === null){
    return 'Game closed'
  }
  let tools = [enter1, enter2];
  let check = tools.filter(item => item.includes('Paper') || item.includes('Rock') || item.includes('Scissors'));
  if(check.length < 2){
    alert('Invalid input, enter the correct value.');
    return game(prompt('1st player'), prompt('2nd player'));
  }
  if(enter1 === enter2){
    alert('Draw! Enter new values.');
    return game(prompt('1st player'), prompt('2nd player'));
  }
  if(enter1 === 'Paper' && enter2 === 'Rock'){
    return '1st player wins!';
  }
  else if(enter1 === 'Rock' && enter2 === 'Paper'){
    return '2nd player wins!';
  }
  else if(enter1 === 'Paper' && enter2 === 'Scissors'){
    return '2st player wins!';
  }
  else if(enter1 === 'Scissors' && enter2 === 'Paper'){
    return '1st player wins!';
  }
  else if(enter1 === 'Rock' && enter2 === 'Scissors'){
    return '1st player wins!';
  }
  else if(enter1 === 'Scissors' && enter2 === 'Rock'){
    return '2nd player wins!';
  }
}

console.log(game('Paper', 'Pen'))
// console.log(game('Paper', 'Paper'))
// console.log(game('Paper', 'Scissors'))

/*Ex. 6

Write a program, to calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ….. + (− 1^𝑘 )* 1/n .*/

function fractions(n){
  let result = [];
  for(let i = 1; i <= n; i++){
    result.push(Math.pow(-1, 1 + i) / (-1 + (2 * i)))
  }
  return result.reduce((accumulator, item) => accumulator + item)
}

console.log(fractions(10))

/*Ex. 7

Given an array of a size smaller than 100.
It consists of numbers from 0 to 99 in any order. Create a new array where each element from that array is placed under the index of its value.
Start from the smallest value and end with the biggest one. If there are missing values, put them in their places undefined.*/

function valueToIndex(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr[arr[i]] = arr[i]
  }
  return newArr;
}

console.log(valueToIndex([4, 3, 0, 9]))
console.log(valueToIndex([26, 30, 19, 5]))


/*Ex. 8

Given an array consisting of the arrays of numbers (like a two-dimensional array). Find the sum of each row and print them as an array.*/

function sumOfAll(arr){
  return arr.map(item => {
    return item.reduce((previous, eachOne) => previous + eachOne)
  })
}

console.log(sumOfAll([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]))
console.log(sumOfAll([[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]))
console.log(sumOfAll([[1], [2], [3], [4]]))

/*Ex. 9

Print the following pattern:*/


function pattern(n){
  for(let i = 1; i <= n; i++){
    let cell = '';
    for(let j = 1; j <= n - 1; j++){
      if(i === 1 || j === 1 || j === n - 1 || i === n){
        cell += '*';
      }
      else{
        cell += ' ';
      }
    }
    console.log(cell)
  }
}

pattern(7)

/*Ex. 10

Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.*/

function possibleSubsets(arr){
  let newArr = [];
  if(arr.length <= 3){
    return arr;
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      for(let k = j + 1; k < arr.length; k++){
        let eachArr = [];
        eachArr.push(arr[i], arr[j], arr[k]);
        newArr.push(eachArr);
      }
    }
  }
  return newArr;
}

console.log(possibleSubsets([4]))
console.log(possibleSubsets([19, 6]))
console.log(possibleSubsets([5, 9, 23, 0, -2, -1]))