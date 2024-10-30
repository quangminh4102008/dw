const Account = require('../models/account');

exports.getAccounts = () => {
  return Account.find({});
};

exports.getAccounts = (skip, limit) => {
  return Account.find().skip(skip).limit(limit);
};

exports.findById = (id) => {
  return Account.findOne({_id: id}).exec();
};

exports.createAccount = (accountData) => {
  const newAccount = new Account(accountData);
  return newAccount.save();
};

exports.update = (accountData) => {
  const updated = Account.update(accountData);
  return updated;
};

exports.hardDelete = (id) => {  
  return Account.deleteOne({_id: id});
};

exports.findAccountByUsername = (username) => {
  
};
