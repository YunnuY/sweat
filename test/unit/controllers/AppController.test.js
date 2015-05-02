var request = require('supertest');
var template = require('../../support').template;
var tail = require('../../support').tail();
var params = require('../../support').params();

describe('AppController', function() {

  describe('#wechat()', function() {
    it('valid get should response echostr', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .query(params)
        .expect(200, params.echostr, done);
    });
    it('invalid get should response 401', function (done) {
      request(sails.hooks.http.app)
      .get('/')
      .expect(401)
      .expect('Invalid signature', done);
    });
    it('valid post should ok', function (done) {
      var info = {
        sp: 'nvshen',
        user: 'diaosi',
        type: 'text',
        text: '测试中'
      };
      request(sails.hooks.http.app)
      .post('/' + tail)
      .send(template(info))
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        var body = res.text.toString();
        body.should.include('<ToUserName><![CDATA[diaosi]]></ToUserName>');
        body.should.include('<FromUserName><![CDATA[nvshen]]></FromUserName>');
        body.should.match(/<CreateTime>\d{13}<\/CreateTime>/);
        body.should.include('<MsgType><![CDATA[text]]></MsgType>');
        body.should.include('<Content><![CDATA[hehe]]></Content>');
        done();
      });
    });
  });

});

