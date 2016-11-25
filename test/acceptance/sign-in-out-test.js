'use strict';

const assert           = require('assert');
const acceptanceHelper = require('../support/acceptance-helper');

describe('signing in and out flows', () => {
  beforeEach((done) => {
    acceptanceHelper.startServer(done);
  });

  afterEach((done) => {
    acceptanceHelper.stopServer(done);
  });

  it('viewing a protected page and not signed in will redirect to sign in', (done) => {
    acceptanceHelper.get('/dashboard', (err, res) => {
      if (err) { return done(err); }
      assert.deepEqual(res.redirects, ['http://localhost:' + acceptanceHelper.port + '/sign-in']);
      done();
    });
  });


});