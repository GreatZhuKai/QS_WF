var gulp = require('gulp');
// 代码前后端模块化统一的 构建工具
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
// gulp 任务管理器 进驻任务 再跟具体时间
//中间有个插件 适配
var source = require('vinyl-source-stream')

gulp.task('build',function() {
  return browserify({
      entries:'./src/js/main.js',
      debug:true
  })
  .transform("babelify", {
      presets:["env"]
  })
  .bundle()
 //   可以被gulp理解的源码格式
 // browserify -> gulp 转码过程
  .pipe(source('main.js'))
  .pipe(buffer(uglify())) //压缩
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch',['build'],function() {
    gulp.watch('./src/js/*.js',['build']);
});

gulp.task('default',['watch']);