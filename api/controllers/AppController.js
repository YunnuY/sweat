var wechat = require('wechat');

/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  wechat: wechat(sails.config.wechat.token, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var info = req.weixin;
    // 回复屌丝(普通回复)
    if (info.FromUserName === 'diaosi') {
      res.reply('hehe');
    } else if (info.FromUserName === 'test') {
      res.reply({
        content: 'text object',
        type: 'text'
      });
    } else if (info.FromUserName === 'hehe') {
      res.reply({
        title: "来段音乐吧<",
        description: "一无所有>",
        musicUrl: "http://mp3.com/xx.mp3?a=b&c=d",
        hqMusicUrl: "http://mp3.com/xx.mp3?foo=bar"
      });
    } else if (info.FromUserName === 'cs') {
      res.transfer2CustomerService();
    } else if (info.FromUserName === 'kf') {
      res.transfer2CustomerService('test1@test');
    } else if (info.FromUserName === 'ls') {
      res.reply(info.SendLocationInfo.EventKey);
    } else if (info.FromUserName === 'pic_weixin') {
      res.reply(info.SendPicsInfo.EventKey);
    } else if (info.FromUserName === 'web') {
      res.reply('web message ok');
    } else if (info.FromUserName === 'empty') {
      res.reply('');
    } else {
    // 回复高富帅(图文回复)
      res.reply([
        {
          title: '你来我家接我吧',
          description: '这是女神与高富帅之间的对话',
          picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
          url: 'http://nodeapi.cloudfoundry.com/'
        }
      ]);
    }
  })
};


