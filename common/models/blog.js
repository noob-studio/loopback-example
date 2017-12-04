'use strict';

module.exports = function(Blog) {

    Blog.hello = function(msg, callback){
		callback(null, "Hello "+msg)
	}
	Blog.remoteMethod(
		'hello', {
			http: {
				path: '/hello',
				verb: 'get'
			},
			accepts: {
				arg: 'msg', 
				type: 'string'
			},
			returns: {
				arg: 'word',
				type: 'string'
			}
		}
	);
};
