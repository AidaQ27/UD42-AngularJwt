var faker = require ('faker');

var database = { personajes: [] };

for (var i=1; i <= 5; i++) {
  database.personajes.push({
    id: i,
    name: faker.name.words(),
    status: faker.status.words(),
    species: faker.species.words(),
    gender: faker.gender.words(),
    origin: faker.origin.words(),
    location: faker.locatio.words(),
    image: faker.image.words(),
    published: true,


  })
}

console.log(JSON.stringify(database));
