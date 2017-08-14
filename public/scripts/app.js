var CNI = (function () {
'use strict';

class UI {
  constructor() {
    this.articlesUrl = '/api/articles';
    NProgress.configure({ showSpinner: false });
  }

  init() {
    return new Promise((resolve, reject) => {
      NProgress.start();

      const articles = JSON.parse(localStorage.getItem('CNITest.articles'));

      if (articles && location.href.includes('/article/')) {
        const articleID = Number(location.href.substring(location.href.indexOf('/article/') + 9));
        const article = articles.find(article => articleID === article.id);
        article.single = true;
        resolve([article]);
      }

      if (articles && articles.length > 0) {
        resolve(articles);
      }

      this
        .getArticles()
        .then(articles => {
          NProgress.done();
          localStorage.setItem('CNITest.articles', JSON.stringify(articles));
          resolve(articles);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getArticles() {
    return fetch(this.articlesUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        console.log('Response error was not OK');
      })
      .catch(err => {
        console.log(err);
      });
  }

  formatArticleBody(body) {
    switch(body.type) {
      case 'plaintext':
        return this.plainBodyTemplate(body.body);

      case 'h2':
        return this.headingTemplate(body.body);

      case 'pull_quote':
        return this.pullQuoteTemplate(body.body);
    }
  }

  pullQuoteTemplate(pullQuote) {
    return `<pullquote>${pullQuote}</pullquote>`;
  }

  plainBodyTemplate(body) {
    return `<p>${body}</p>`;
  }

  headingTemplate(heading) {
    return `<h2>${heading}</h2>`;
  }

  formatArticle(article) {
    const articleTemplate =
      `
        <article class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__media">
            <img src="${article.cover}" width="200" border="0" alt=""
             style="padding:10px;">
          </div>
          <div class="mdl-card__supporting-text">
            <h2 class="summary mdl-card__title-text">${article.title}</h2>
            ${article.single ? article.body.map(this.formatArticleBody.bind(this)).join('') : `          
              <p>${article.body[0].body}</p>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a href="/article/${article.id}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Read
            </a>
          </div>
          `
          }
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">share</i>
            </button>
          </div>
        </article>
    `;
    return articleTemplate;
  }

  loadArticlesIntoUI(articles = []) {
    const articlesTemplate =
      `
        <div>
          ${articles.map(this.formatArticle.bind(this)).join('')}
        </div>
      `;
    const section = document.getElementById('main');
    section.innerHTML = articlesTemplate;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui
    .init()
    .then(articles => {
      ui.loadArticlesIntoUI(articles);
    });

});

return UI;

}());
