'use strict';
var gulp = require('gulp')
var gutil = require('gulp-util');
var through = require('through2');
var stream = require('stream');
var es = require('event-stream');
var rs = require('replacestream');
var utils = require('util');
var foreach = require('gulp-foreach')
var readable = stream.Readable;
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'connect-file';

module.exports = function(opt){

	if(!(opt.mode === undefined || typeof opt.mode == 'string')){
		throw new PluginError(PLUGIN_NAME,'Invalid option in.'); //Invalid option in.
	}
	if(!(opt.src === undefined || typeof  opt.src == "string")){
		throw new PluginError(PLUGIN_NAME,'Invalid option in.'); //Invalid option in.
	}

	var isFile = opt.mode === 'file';
	var isString = opt.mode === 'string';
	if(isFile === false && isString === false){
		throw new PluginError(PLUGIN_NAME,'mode is set wrong.[Must be \'string\' or \'file\']'); //mode is set wrong
	}
	var connet = function(file, callback){
		var isStream = file.isStream();
		var isBuffer = file.isBuffer();
		gutil.log('isStream : ' + isStream);
		gutil.log('isBuffer : ' + isBuffer);

		if(isStream){
			throw new PluginError(PLUGIN_NAME,'stream is not supported'); //Invalid option in.
		}
		if(isBuffer){
			var buffer = file.contents;
			if(isFile){
				var secBuffer = file.contents;
				var files = gulp.src(opt.src);
				// for(){
				// 	;
				// };
			}
			if(isString){
				file.contents = Buffer.concat([buffer,new Buffer(opt.src)])
			}
			return callback(null,file);
		}

		callback(null, file);
	}

	return es.map(connet);
}