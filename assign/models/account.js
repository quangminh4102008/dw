const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: {
        type: String,
        required: true
      }, 
      password: {
        type: String,
        required: true
      },
      roles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Account'}]

});
module.exports = mongoose.model('Account',accountSchema);
