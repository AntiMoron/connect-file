'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stream = require('stream');
var es = require('event-stream');
var rs = require('replacestream');
var utils = require('util');
var concat = require('concat-stream');
var readable = stream.Readable;

module.exports = function(src, thing){
	var connet = function(file, callback){
		var isStream = file.contents && typeof file.contents.on === 'function' && typeof file.contents.pipe = 'function';
		var isBuffer = file.contents instanceof Buffer;
		gutil.log(isStream);
		gutil.log(isBuffer);
		function connet(){
			if(isStream){
				gutil.log(file.contents);
				file.contents = file.contents;
				return callback(null,file);
			}
			if(isBuffer){
				var Buffer = file.contents;
				Buffer.concat([file.contents,gulp.src(src).read()]);
				return callback(null,file);
			}
			callback(null, file);
		}

		callback(null, file);
	}

	return es.map(connet);
}