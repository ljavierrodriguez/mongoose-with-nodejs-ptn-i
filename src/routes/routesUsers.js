const { list_users, add_user, insert_user, edit_user, update_user } = require('../controllers/user.controller');


const routesUsers = require('express').Router();

routesUsers.get('/users', list_users);
routesUsers.get('/users/add', add_user);
routesUsers.post('/users', insert_user);
routesUsers.get('/users/:id/edit', edit_user);
routesUsers.post('/users/:id', update_user);

module.exports = routesUsers;