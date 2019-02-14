'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let count = 0;
  while(count < arr.length) {
    console.log(arr[count]);
    count++;
  }
}

function mapper(array, callback) {
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i));
  }
  return newArr;
}

function filterer(array, callback) {
  let newArr = [];
  for(let i = 0; i<array.length; i++) {
    if(callback(array[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function reducer(arr, callback, acc) {
  for(let i = 0; i < arr.length; i++) {
    acc = callback(arr[i], i, acc);
  }
  return acc;
}

let state = {};
let people = ['Kookla', 'Fran', 'Ollie'];
let stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

let newPeople = ['Odie', ...people, 'Garfield'];
let newStuff = {...stuff, cars:[...stuff.cars, 'Chevy']};
let newState = {people: [...newPeople], stuff: {...newStuff}};

console.log('people', people);
console.log('state', state);
console.log('stuff', stuff);
console.log('new people', newPeople);
console.log('new stuff', newStuff);
console.log('new state', newState);
