const mongoose = require('mongoose');
const Account = require('../models/account');
const { faker } = require('@faker-js/faker');

const mongoUri = 'mongodb://127.0.0.1:27017/accountManagement';
mongoose.connect(mongoUri, {}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});

exports.process = async () => {
  const accounts = [];
  for (let i = 0; i < 10; i++) {
    accounts.push({
      username: faker.internet.username(),
      password: faker.internet.password()
    });    
  }
  try {
    // await Account.deleteMany();
    await Account.insertMany(accounts);
    console.log('Insert successfully');    
    process.exit();
  } catch (error) {
    console.error('Error seeding users', error);
    process.exit(1);
  }
};
