# connect-file

This plugin is supposed to make a stream connect with file contents or strings.

use 
```shell
sudo npm install --save-dev connect-file
```
to install


## How to use
when trying to copy content of file or just javascript string.
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

### Test Input Files 
the test files used above are as follows.
```txt
//---------test.txt-----------//
123
```

```txt
//---------test2.txt----------//
FileTest
a
a
a
```
### Test Output File
```txt
//---------result/newFile.txt----------//
123FileTest
a
a
aabcdefghijklmnopqrstuvwxyz.TestString
```
