const Blockchain = require('./blockchain');
const faker = require('faker');

const randomCoin = new Blockchain();

const transaction1 = randomCoin.generateTransactionPayload(faker.name.firstName(), faker.name.firstName(), faker.datatype.number(), faker.random.words());
const transaction2 = randomCoin.generateTransactionPayload(faker.name.firstName(), faker.name.firstName(), faker.datatype.number(), faker.random.words());
const transaction3 = randomCoin.generateTransactionPayload(faker.name.firstName(), faker.name.firstName(), faker.datatype.number(), faker.random.words());
const transaction4 = randomCoin.generateTransactionPayload(faker.name.firstName(), faker.name.firstName(), faker.datatype.number(), faker.random.words());
const transaction5 = randomCoin.generateTransactionPayload(faker.name.firstName(), faker.name.firstName(), faker.datatype.number(), faker.random.words());
const transaction6 = randomCoin.generateTransactionPayload(faker.name.firstName(), faker.name.firstName(), faker.datatype.number(), faker.random.words());

randomCoin.addNewBlock([transaction1, transaction2]);
randomCoin.addNewBlock([transaction3, transaction4, transaction5]);
randomCoin.addNewBlock([transaction6]);


console.log("Random Coin Blockchain: ", JSON.stringify(randomCoin, null, 4))