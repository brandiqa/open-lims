const assert = require('assert');
const app = require('../../src/app');

describe('\'services\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/services');

    assert.ok(service, 'Registered the service');
  });
});
