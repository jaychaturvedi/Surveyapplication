const mongoose = require('mongoose')
const recipientSchema = require('./Recipient')
const {Schema} = mongoose

const surveySchema = new Schema({
    title : String,
    body : String,
    subject :  String,
    recepients : [recipientSchema],
    yes : {type: Number, default: 0},
    no : {type : Number, default : 0},
    _user : { type : Schema.Types.ObjectId, ref : 'User'},
    dateSent : Date,
    lastResponded : Date
});

mongoose.model('surveys', surveySchema)
