const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'test2';

MongoClient.connect(url).then(client => {
    console.log('Connected to server');
    const db = client.db(dbname);
    
    dboper.insertDocument(db, { "name" : "John", "pass" : "Doe"},'users')
    .then((result) => {
        console.log('Inserted document\n', result.ops);
        return dboper.findDocuments(db, 'users')
    })
    .then((docs) => {
        console.log('Found documents:\n', docs);
        return dboper.updateDocument(db, {"name" : "John"}, {"pass":"Moe"}, 'users')
    })
    .then((result) => {
        console.log('Document updated\n', result.result);
        return dboper.findDocuments(db, 'users')
    })
    .then((docs) => {
        console.log('Found updated document\n', docs);
        return db.dropCollection('users');
    })
    .then((result) => {
        console.log('Dropped collection\n', result);

        client.close();
    }).catch((err) => console.log(err));
}).catch((err) => console.log(err));