
module.exports = (app) => {
  
  app.get('/', (req, res) => res.sendfile('./src/index.html'));
  app.get('/NBA-Predict', (req, res) => res.send('NBA Predict here'));
  app.get('/FIFA-Predict', (req, res) => res.send('Fifa predict here'));
};
