var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  news = [
    {
     'title':"BlackRock makes technology deal in cash management business",
     'description':"BlackRock makes technology deal in cash management business BlackRock makes technology deal in cash management business",
     'date':'6/27/2017',
     'url':'https://www.reuters.com/article/us-blackrock-moneymarket-idUSKBN19I231',
     'urlToImage':'https://s2.reutersmedia.net/resources/r/?m=02&d=20170627&t=2&i=1190698374&w=780&fh=&fw=&ll=&pl=&sq=&r=LYNXMPED5Q12H',
    },
    {
     'title': 'Global ransomware attack causes turmoil',
     'description': "Global ransomware attack causes turmoil",
     'date':'6/27/2017',
     'url': "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=4&cad=rja&uact=8&ved=0ahUKEwjusY6Km9_UAhUL0IMKHaoBB7EQqQIIMCgAMAM&url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Ftechnology-40416611&usg=AFQjCNHy7uv3HcQDt5XdahIPP6wXA8_z7Q",
     'urlToImage': "https://ichef-1.bbci.co.uk/news/660/cpsprodpb/122AA/production/_96701447_mediaitem96701446.jpg",
    },
    {
     'title':"BlackRock makes technology deal in cash management business",
     'description':"BlackRock makes technology deal in cash management business BlackRock makes technology deal in cash management business",
     'date':'6/27/2017',
     'url':'https://www.reuters.com/article/us-blackrock-moneymarket-idUSKBN19I231',
     'urlToImage':'https://s2.reutersmedia.net/resources/r/?m=02&d=20170627&t=2&i=1190698374&w=780&fh=&fw=&ll=&pl=&sq=&r=LYNXMPED5Q12H',
    }
  ]

  res.json(news);
 });

module.exports = router;
