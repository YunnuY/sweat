/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `AppController.serve()`
   */
  serve: function (req, res) {
    return res.json({
      todo: 'serve() is not implemented yet!',
      allParams: req.allParams()
    });
  }
};

