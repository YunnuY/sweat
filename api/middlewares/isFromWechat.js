var wechat = require('wechat');

/**
 * isFromWechat middleware
 *
 * @description :: check if request is from wechat service.
 */

module.exports = {
  isFromWechat: function(req, res, next) {
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;

    if(signature && timestamp && nonce) {
      sails.log.info('WECHAT :: ', this);
      wechat(sails.config.wechat.token, function(req, res, next){
        var info = req.weixin;
      })();
    } else {
      next();
    }
  }
};

