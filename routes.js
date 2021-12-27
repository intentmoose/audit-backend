module.exports = (app) => {
  var axios = require('axios');
  app.get('/signin', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/v6/finance/quote/marketSummary',
      params: { modules: 'defaultKeyStatistics,assetProfile' },
      headers: {
        'x-api-key': 'l9em9EYqVN5JwB7QdGguT60RRiqI1EMRhHcAeGVd',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.send(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
        res.send(error);
      });
  });
};
