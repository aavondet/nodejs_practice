const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'test2';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Connected to server');
    const db = client.db(dbname);
    // const collection = db.collection('users');
    
    dboper.insertDocument(db, { "name" : "John", "pass" : "Doe"},
        'users', (result) => {
            console.log('Inserted document\n', result.ops);

            dboper.findDocuments(db, 'users', (docs) => {
                console.log('Found documents:\n', docs);

                dboper.updateDocument(db, {"name" : "John"}, {"pass":"Moe"}, 'users', (result) => {
                    console.log('Document updated\n', result.result);

                    dboper.findDocuments(db, 'users', (docs) => {
                        console.log('Found updated document\n', docs);

                        db.dropCollection('users', (result) => {
                            console.log('Dropped collection\n', result);

                            client.close();
                        });
                    });
                });
            });

    });
    
    // Implementation wiothout using operations module

    // collection.insertOne({"name": "Bob", "pass": "Ray"}, 
    //     (err, result) => {
    //         assert.equal(err, null);

    //         console.log('After Insert:\n');
    //         console.log(result.ops);

    //         collection.find({}).toArray((err, docs) => {
    //             assert.equal(err, null);

    //             console.log('Found:\n');
    //             console.log(docs);

    //             db.dropCollection('users', (err, result) => {
    //                 assert.equal(err, null);

    //                 client.close();
    //             });
    //         });
    //     });
});