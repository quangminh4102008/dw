const accountService = require('../services/account-service');

exports.getAll = async (req, res) => {  
    try {    
      const accounts = await accountService.getAll();
      res.render('accounts/list', { accounts });
    } catch (error) {    
      res.status(400).send(error.message);
    }
};

exports.createAccount = async (req, res) => {  
    try {    
      res.render('accounts/form');
    } catch (error) {    
      res.status(400).send(error.message);
    }
};

exports.storeAccount = async (req, res) => {
    const { username, email, password } = req.body;
    try {    
      await accountService.store({ username, email, password });    
      res.redirect('/accounts');
    } catch (error) {    
      res.status(400).send(error.message);
    }
};