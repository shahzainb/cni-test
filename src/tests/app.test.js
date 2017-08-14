import fetchMock from 'fetch-mock';
import UI from '../scripts/app';
import { MockData } from './mock';

describe('UI class', () => {
  let ui;

  global.NProgress = {
    onLine: true,
    start() {},
    configure() {},
    done() {}
  };

  beforeEach(() => {
    ui = new UI();
    fetchMock.get('/api/articles', MockData.api.articles.Success)
  });

  afterEach(() => {
    fetchMock.restore()
  });

  test('a successful getArticles call should return articles', () => {
    expect.assertions(1);
    return ui.getArticles().then(articles => {
      expect(articles).toEqual(MockData.api.articles.Success);
    });
  });

  test('headingTemplate should return right template for heading', () => {
    expect.assertions(1);
    const heading = 'Test Heading';
    expect(ui.headingTemplate(heading)).toEqual(`<h2>${heading}</h2>`);
  });

  test('plainBodyTemplate should return right template for plaintext', () => {
    expect.assertions(1);
    const body = 'Test Body';
    expect(ui.plainBodyTemplate(body)).toEqual(`<p>${body}</p>`);
  });

  test('pullQuoteTemplate should return right template for pull quotes', () => {
    expect.assertions(1);
    const pullQuote = 'Test Quote';
    expect(ui.pullQuoteTemplate(pullQuote)).toEqual(`<pullquote>${pullQuote}</pullquote>`);
  });

  test('formatArticleBody should return right template for article body', () => {
    const article = MockData.articles[0];
    expect(ui.formatArticleBody(article.body[0])).toEqual(`<p>${article.body[0].body}</p>`);
    expect(ui.formatArticleBody(article.body[1])).toEqual(`<h2>${article.body[1].body}</h2>`);
    expect(ui.formatArticleBody(article.body[2])).toEqual(`<pullquote>${article.body[2].body}</pullquote>`);
  });
});