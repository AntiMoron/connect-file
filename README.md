# connect-file

## this plugin is still testing!!!

This plugin is supposed to make a stream connect with file contents or strings.

use
```shell
sudo npm install --save-dev connect-file
```


## How to use
when trying to access
```javascript
var concat = require('gulp-concat')
var connectFile = require('connect-file')

gulp.task('connect',function(){
    gulp.src('test.txt')
    .pipe(connect({mode:'file', src:'test2.txt'}))
    .pipe(connect({mode:'string',src:'abcdefghijklmnopqrstuvwxyz.TestString'}))
    .pipe(concat('newFile.txt'))
    .pipe(gulp.dest('result/'));
});


```
