var request = require('supertest');

describe('AppController', function() {

  describe('#auth()', function() {
    it('should response echostr', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .query({ signature: 'signature', timestamp: 'timestamp', nonce: 'nonce', echostr: 'echostr' })
        .expect(200, 'abcde', done);
    });
  });

});

