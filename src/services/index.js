const users = require('./users/users.service.js');
const customer = require('./customer/customer.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(customer);
};
