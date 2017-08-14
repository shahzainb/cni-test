const ARTICLES_SUCCESS_PAYLOAD = [
  {
    id: 1,
    title: 'Fake title 1',
    body: [
      {
        type: 'plaintext',
        body: 'Frankfurter turducken sausage, landjaeger strip steak tail alcatra. Filet mignon kielbasa brisket tail biltong ham cow. Sausage beef ribs picanha flank chicken, boudin capicola pork loin salami ball tip swine bresaola pig andouille rump. T-bone cupim swine andouille brisket. Pastrami t-bone sausage short loin alcatra porchetta andouille pancetta landjaeger. Frankfurter chicken pork loin, spare ribs sirloin pig picanha rump meatloaf. Venison t-bone sirloin corned beef, cupim tail pastrami capicola tongue landjaeger beef.'
      },
      {
        type: 'h2',
        body: 'Heading 2'
      },
      {
        type: 'pull_quote',
        body: 'Quote 1'
      }
    ],
    cover: 'https://localhost/images/1.jpg',
    url: 'https://localhost/article.html',
    single: true
  },
  {
    id: 2,
    title: 'Fake title 2',
    body: [
      {
        type: 'plaintext',
        body: 'Frankfurter turducken sausage, landjaeger strip steak tail alcatra. Filet mignon kielbasa brisket tail biltong ham cow. Sausage beef ribs picanha flank chicken, boudin capicola pork loin salami ball tip swine bresaola pig andouille rump. T-bone cupim swine andouille brisket. Pastrami t-bone sausage short loin alcatra porchetta andouille pancetta landjaeger. Frankfurter chicken pork loin, spare ribs sirloin pig picanha rump meatloaf. Venison t-bone sirloin corned beef, cupim tail pastrami capicola tongue landjaeger beef.'
      }
    ],
    cover: 'https://localhost/images/2.jpg',
    url: 'https://localhost/article.html',
    single: false
  }
];

const MockData = {
  api: {
    articles: {
      Success: ARTICLES_SUCCESS_PAYLOAD
    }
  },
  articles: ARTICLES_SUCCESS_PAYLOAD
};

export {
  MockData
}