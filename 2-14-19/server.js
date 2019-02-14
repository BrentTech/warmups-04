'use strict';

const superagent = require('superagent');
const url = 'https://swapi.co/api/people';

let fetchPeopleWithPromises = () => {
  return superagent.get(url)
  .then(res => {
    return res.body.result.map((person) => {
      return superagent.get(person.url);
    });
  })
  .then(peoplePromises => {
    return Promise.all(peoplePromises)
    .then( people => {
      let names = [];
      for(let data of people) {
        names.push(data.body.name);
      }
      return names;
    });
  })
  .catch(console.error);
};

let fetchPeopleWithAsync = async () => {
  try {
    let peopleSet = await superagent.get(url);
    let people = (peopleSet.body && peopleSet.body.results) || [];
    let peopleReqeusts = people.map(person => {
      return superagent.get(person.url);
    });
    let swapiNames = await Promise.all(peopleRequests)
    .then(people => {
      let names = [];
      for(let data of people) {
        names.push(data.body.name);
      }
      return names;
    });
    return swapiNames;
  }
  catch(err) {console.error(err); }
};

fetchPeopleWithPromises()
.then(people => console.log('Promise People', people));

fetchPeopleWithAsync()
.then(names => console.log('Async Names', names));