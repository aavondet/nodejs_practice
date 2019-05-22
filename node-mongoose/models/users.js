const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var gameSchema = new Schema({
    opponent : {
        type : String,
        required : true
    },
    win : {
        type : Boolean,
        required : true
    }
}, {
    timestamps : true
})

var userSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    pass : {
        type: String,
        required: true,
        minlength: 8
    },
    score : {
        type: Number,
        min: 0
    },
    games : [ gameSchema ]
},{
    timestamps : true
});

var Users = mongoose.model('User', userSchema);

module.exports = Users;