const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  }  
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
