
module.exports = (app) => {

  app.get('/', (req, res) => res.sendFile('index.html', { root: './src'}));
  app.get('/NBA-Predict', (req, res) => res.send('NBA Predict here'));
  app.get('/FIFA-Predict', (req, res) => res.send('Fifa predict here'));
};
