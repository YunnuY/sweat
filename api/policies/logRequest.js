/**
 * logRequest
 *
 * @module      :: Policy
 * @description :: log request
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  console.log(req.method, req.url, req.get('content-type'));
  return next();
};
