// Initializes the `tasks` service on path `/api/tasks`
const createService = require('feathers-mongoose');
const createModel = require('../../models/tasks.model');
const hooks = require('./tasks.hooks');
const filters = require('./tasks.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tasks',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/tasks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/tasks');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
