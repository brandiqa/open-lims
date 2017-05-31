// Initializes the `invoices` service on path `/api/invoices`
const createService = require('feathers-mongoose');
const createModel = require('../../models/invoices.model');
const hooks = require('./invoices.hooks');
const filters = require('./invoices.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'invoices',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/invoices', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/invoices');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
