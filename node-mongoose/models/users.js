const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    pass : {
        type: String,
        required: true
    },
    score : {
        type: Number,
        min: 0
    }
},{
    timestamps : true
});

var Users = mongoose.model('User', userSchema);

module.exports = Users;