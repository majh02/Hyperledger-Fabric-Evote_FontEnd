var express = require('express');
var app = express();
var bodyParser = require('body-parser');  //module(Post방식을 사용하기위함)

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('forms'));
app.set('view engine', 'jade'); //view engine 템플릿 엔진 jade
app.set('views', './forms'); //디렉토리


//첫 화면
app.get('/login', function(req, res){
  res.render('login');
});
app.post('/start_vote', function(req, res){
  res.render('start_vote');
});
app.post('/result', function(req, res){
  res.render('result');
});
// 국어국문: vote_department_KOR, 영어영문: vote_department_ENG
// 아이티: vote_department_IT, 컴공: vote_department_COM
app.post('/vote_department_KOR', function(req, res){
  res.render('vote_department_KOR');
});
// 국어국문, 영어영문 -> 인사대: end_department_CHSS
//아이티, 컴공 -> 공과대: end_department_CE
app.post('/end_department_CHSS', function(req, res){
  res.render('end_department_CHSS');
});
// 인사대: vote_college_CHSS, 공과대: vote_college_CE
app.post('/vote_college_CHSS', function(req, res){
  res.render('vote_college_CHSS');
});
app.post('/end_college', function(req, res){
  res.render('end_college');
});
app.post('/vote_total', function(req, res){
  res.render('vote_total');
});
app.post('/end_total', function(req, res){
  res.render('end_total');
});

app.listen(4000, function(){
  console.log('Connected 4000 port!');
});
