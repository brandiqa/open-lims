// Initializes the `customers` service on path `/api/customers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/customers.model');
const hooks = require('./customers.hooks');
const filters = require('./customers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'customers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/customers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/customers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
