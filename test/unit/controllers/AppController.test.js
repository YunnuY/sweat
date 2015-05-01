var request = require('supertest');

describe('AppController', function() {

  describe('#auth()', function() {
    var params = { signature: 'signature', timestamp: 'timestamp', nonce: 'nonce', echostr: 'echostr' };
    it('should response echostr', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .query(params)
        .expect(200, params.echostr, done);
    });
  });

});

