const assert = require('assert');
const app = require('../../src/app');

describe('\'vendors\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/vendors');

    assert.ok(service, 'Registered the service');
  });
});
