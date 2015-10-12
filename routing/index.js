'use strict';

module.exports = (params) => {
  	var app = params.app;

  	return app.all("/ping", (req, res, next) => {
    	return res.status(200).json({
      		error: false,
      		result: "PONG"
    	});
  	});
};
