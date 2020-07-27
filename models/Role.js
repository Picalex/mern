const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    //id: {type: String, required: true, unique: true},
    roleName:{type: String, required: true ,unique: true}
})

module.exports = model('Role', schema)