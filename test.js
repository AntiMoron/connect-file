var connectPlugin = require('../')
var fs = require('fs')
var path = require('path')
var es = require('event-stream')
var should = require('should')
var gutil = require('gulp-util')
require('mocha')

describe('connect-file',function(){
	describe('connectPlugin()',function(){
		it('should connect file content on a stream',function(done){
			var file = new File({contents:es.readArray(['stream','with','those','contents'])
			});
			var prefixer = prefixer('prependthis');
			prefixer.write(file);

			prefixer.once('data',function(file){
				assert(file.isStream());

				file.contents.pipe(es.wait(function(err,data){
					assert.equal(data,'prependthisstreamwiththosecontents');
					done();
				}));
			})
		})

	})


})