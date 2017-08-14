const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 4666;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('./index.html');
});

app.get('/article/:id', (req, res) => {
  const articleData = getArticles();
  const article = articleData.find(article => article.id === Number(req.param('id')));
  let articleHTML = fs.readFileSync('./public/article.html', 'utf8');
  articleHTML= articleHTML.replace('{{title}}', article.title);
  articleHTML = articleHTML.replace('{{summary}}', article.body[0].body);
  res.send(articleHTML);
});

app.get('/api/articles', (req, res) => {
  const articleData = getArticles();
  res.json(articleData);
});

app.listen(process.env.PORT || 4666, () => {
  console.log(`App available at: http://localhost:${port}/`);
});

function getArticles() {
  const articleData = require('./src/data/article.json');
  return articleData;
}