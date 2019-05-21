const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'test2';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Connected to server');
    const db = client.db(dbname);
    const collection = db.collection('users');
    collection.insertOne({"name": "Bob", "pass": "Ray"}, 
        (err, result) => {
            assert.equal(err, null);

            console.log('After Insert:\n');
            console.log(result.ops);

            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);

                console.log('Found:\n');
                console.log(docs);

                db.dropCollection('users', (err, result) => {
                    assert.equal(err, null);

                    client.close();
                });
            });
        });
});