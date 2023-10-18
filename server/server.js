const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(cors());
// 더미 사용자 정보
const validUsername = 'test';
const validPassword = 'test1234';

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    res.status(200).json({ message: '로그인 성공' });
  }
  else if(username!==validUsername){
    res.status(200).json({message: '아이디 없음'});
  }
  else if(username===validUsername && password !== validPassword){
    res.status(200).json({message: '비밀번호 오류'});
  }
  else {
    res.status(401).json({ message: '로그인 실패' });
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
