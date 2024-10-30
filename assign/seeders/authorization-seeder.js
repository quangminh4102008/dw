const mongoose = require('mongoose');
const Permission = require('../models/permission');
const Role = require('../models/role');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Account = require('../models/account');
const account = require('../models/account');
const saltRounds = 10;

mongoose.connect('mongodb://127.0.0.1:27017/accountManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});

exports.process = async () => {
  const permissionAdminGet = new Permission({
    name: 'Admin Access', url: '/admin', method: 'GET'
  });
  const permissionCreateUserPost = new Permission({
    name: 'Create User', url: '/user/create', method: 'POST'
  });
  await permissionAdminGet.save();
  await permissionCreateUserPost.save();

  const roleAdmin = new Role({
    name: 'Admin', permissions: [permissionAdminGet._id, permissionCreateUserPost._id]
  });
  const roleUser = new Role({
    name: 'User', permissions: []
  });
  await roleAdmin.save();
  await roleUser.save();
  
  const userAdmin = new Account({
    username: 'Admin.com',
    password: await bcrypt.hash('password', saltRounds),
    roles: [roleAdmin._id]
  });
  const user1 = new Account({
    username: 'Nam',
    password: await bcrypt.hash('my password', saltRounds),
    roles: [roleUser._id]
  });
  const user2 = new Account({
    username: 'DAD',
    password: await bcrypt.hash('my password', saltRounds),
    roles: [roleUser._id]
  });
  const user3 = new Account({
    username: 'DAAA',
    password: await bcrypt.hash('my password', saltRounds),
    roles: [roleUser._id]
  });
  const user4 = new Account({
    username: 'TA',
    password: await bcrypt.hash('my password', saltRounds),
    roles: [roleUser._id]
  });
  const user5 = new Account({
    username: 'DE',
    password: await bcrypt.hash('my password', saltRounds),
    roles: [roleUser._id]
  });
  const user6 = new Account({
    username: 'LINH',
    password: await bcrypt.hash('my password', saltRounds),
    roles: [roleUser._id]
  });
  await userAdmin.save();
  await user1.save();
  await user2.save();
  await user3.save();
  await user4.save();
  await user5.save();
  await user6.save();
};
