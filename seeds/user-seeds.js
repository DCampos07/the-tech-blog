const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    email: 'user1@gmail.com',
    password: 'user1password'
  },

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
