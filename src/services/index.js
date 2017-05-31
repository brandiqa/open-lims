const users = require('./users/users.service.js');
const vendors = require('./vendors/vendors.service.js');
const products = require('./products/products.service.js');
const tasks = require('./tasks/tasks.service.js');
const services = require('./services/services.service.js');
const invoices = require('./invoices/invoices.service.js');
const customers = require('./customers/customers.service.js');
const payments = require('./payments/payments.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(vendors);
  app.configure(products);
  app.configure(tasks);
  app.configure(services);
  app.configure(invoices);
  app.configure(customers);
  app.configure(payments);
};
