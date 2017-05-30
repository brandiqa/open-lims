// Initializes the `vendors` service on path `/api/vendors`
const createService = require('feathers-mongoose');
const createModel = require('../../models/vendors.model');
const hooks = require('./vendors.hooks');
const filters = require('./vendors.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'vendors',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/vendors', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/vendors');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
