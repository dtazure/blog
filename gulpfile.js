var gulp = require('gulp'), //引入gulp
ejs  = require('gulp-ejs'), // ejs模板
clean = require('gulp-clean'),//删除模板
minifyimage = require('gulp-imagemin'),//img压缩
minifyhtml = require('gulp-htmlmin'), //html压缩
minifycss = require('gulp-minify-css'),//css压缩
nodemon = require('gulp-nodemon');

gulp.task('app',function () {
    nodemon({
        script: 'app.js',
        ext: 'js json html',
        env: { PORT: 3000 },
        ignore: ['node_modules/**']
    });
});

// gulp.task('clean', function(){
//     return gulp.src('./dist/*')
//         .pipe(clean());
// });




// gulp.task('ejs', function(){
// 	return gulp.src('./src/*.html')
// 		.pipe(ejs())
// 		.pipe(minifyhtml({
// 		    "removeComments": true,
// 		    "collapseWhitespace": true,
// 		    "collapseBooleanAttributes": true,
// 		    "removeEmptyAttributes": true,
// 		    "minifyJS": true,
// 		    "minifyCSS": true
// 	  	}))
// 		.pipe(gulp.dest('./dist'));
// });


// gulp.task('html', function(){
// 	return gulp.src('./src/article/*.html')
// 		.pipe(minifyhtml())
// 		.pipe(gulp.dest('./dist/article'));
// });

// gulp.task('css', function(){
// 	return gulp.src('./static/css/*.css')
// 		.pipe(minifycss())
// 		.pipe(gulp.dest('./dist/static/css'));
// });

// gulp.task('img', function(){
// 	return gulp.src('./static/image/*')
// 		.pipe(minifyimage())
// 		.pipe(gulp.dest('./dist/static/image'));
// });



// gulp.task('default', gulp.series('app','html','img','css' ));
gulp.task('default', gulp.series('app'));

