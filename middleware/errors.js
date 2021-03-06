module.exports = {
	error404 : function(req, res, next){
				  var err = new Error('Not Found');
				  err.status = 404;
				  next(err);
	},
	error500 : function(app){
		if (app.get('env') === 'development') {
		return  function(err, req, res, next) {
		    res.status(err.status || 500);
		    res.render('error', {
		      message: err.message,
		      error: err
		    });
		  };
		}

		// production error handler
		// no stacktraces leaked to user
		return function(err, req, res, next) {
		  res.status(err.status || 500);
		  res.render('error', {
		    message: err.message,
		    error: {}
		  });
		}

	}
}