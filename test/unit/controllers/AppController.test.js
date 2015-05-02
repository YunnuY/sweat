var request = require('supertest');

describe('AppController', function() {

  describe('#auth()', function() {
    it('should response echostr', function (done) {
      var params = {
        timestamp: new Date().getTime(),
        nonce: parseInt((Math.random() * 10e10), 10)
      };
      var s = [sails.config.wechat.token, params.timestamp, params.nonce].sort().join('');
      params.signature = require('crypto').createHash('sha1').update(s).digest('hex');
      params.echostr = 'hehe';
      request(sails.hooks.http.app)
        .get('/')
        .query(params)
        .expect(200, params.echostr, done);
    });
    it('should 401', function (done) {
      request(sails.hooks.http.app)
      .get('/')
      .expect(401)
      .expect('Invalid signature', done);
    });
  });

});

