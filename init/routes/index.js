var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});
router.get('/login', function(req, res, next) {
  res.render('login', {
  	title: 'Login',
  	noti: 'wrong password/username'
  });
});
router.post('/login', function(req, res, next) {
  console.log(req.body('username'));
  console.log(req.body('password')); 
  res.render('login', {
  	title: 'Login',
  	noti: 'wrong password/username'
  });
});
router.get('/my_courses', function(req, res, next) {
  res.render('my_courses', { title: 'My Courses' });
});
router.get('/teacher_profile', function(req, res, next) {
  res.render('teacher_profile', { title: 'Teacher profile' });
});
router.get('/student_profile', function(req, res, next) {
  res.render('student_profile', { title: 'Student Profile' });
});
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Homepage' });
// });
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Homepage' });
// });
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Homepage' });
// });
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Homepage' });
// });

module.exports = router;
