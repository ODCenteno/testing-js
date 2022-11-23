const { config } = require('./config'); // configuración variables de ambiente
const createApp = require('./app');

const app = createApp();

app.listen(config.port, (err) => {
  if (err) {
    console.error('Error: ', err);
  }
});
