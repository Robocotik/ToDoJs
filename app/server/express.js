import express from 'express';
import reload from 'reload';
import {execSync} from 'child_process';

const app = express();

app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express');
  res.statusCode = 200;
  console.log(`[${req.method}] ${req.url} ${res.statusCode}`);
  next();
});

app.use(express.static('app'));

app.listen(5500, '127.0.0.1', () => {
  console.log('Сервер запущен на http://127.0.0.1:5500');
});

reload(app).then(function () {
  execSync('npm run build', {stdio: 'inherit', shell: true});
});
