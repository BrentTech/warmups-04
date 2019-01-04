'use strict';

const superagent = require('superagent');

// https://swapi.co/api/people
let swPeople = [];

let url = "https://swapi.co/api/people";

superagent.get(url)
  .then( (result) => {
    for(let i = 0; i < result.body.results.length; i++) {
      swPeople.push(result.body.results[i])
    }
    // console.log(swPeople);
  })
  .then( swPeople.reduce( (acc, val) => {
    acc = acc + val.url;
    return acc;
  }, []));

  // console.log(swPeople);
