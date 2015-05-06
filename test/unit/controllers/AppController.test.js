var should = require('should');
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
    it('without wechat params should get home page', function (done) {
      request(sails.hooks.http.app)
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        var body = res.text.toString();
        (body.indexOf('html')).should.above(0);
        done();
      });
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
      .set('Content-Type', 'text/xml')
      .send(template(info))
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        var body = res.text.toString();
        (body.indexOf('<ToUserName><![CDATA[diaosi]]></ToUserName>')).should.above(0);
        (body.indexOf('<FromUserName><![CDATA[nvshen]]></FromUserName>')).should.above(0);
        body.should.match(/<CreateTime>\d{13}<\/CreateTime>/);
        (body.indexOf('<MsgType><![CDATA[text]]></MsgType>')).should.above(0);
        (body.indexOf('<Content><![CDATA[hehe]]></Content>')).should.above(0);
        done();
      });
    });
  });

});

