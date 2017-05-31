// Initializes the `payments` service on path `/api/payments`
const createService = require('feathers-mongoose');
const createModel = require('../../models/payments.model');
const hooks = require('./payments.hooks');
const filters = require('./payments.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'payments',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/payments', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/payments');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
