const mongoose = require('mongoose');
const Users = require('./models/users');

const url = 'mongodb://localhost:27017';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected to the server!');

    Users.create({
        name : 'Bob',
        pass : 'Bobby123',
        score : 2
    })
    .then((user) => {
        console.log(user);
        return Users.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);
        return Users.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
});