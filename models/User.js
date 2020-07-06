const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true,default:'Ваше имя'},
  surname: {type: String, required: true,default:'Ваша фамилия'},
  role: {type: String, default:'User', enum:['User','Admin','SuperAdmin']},
  links: [{ type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model('User', schema)
