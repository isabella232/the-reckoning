'use strict';

const app   = require('./app');
const port  = process.env.PORT || 3000;

let server = app.listen(port, () => {
  let address = server.address().address;

  if (address === '::') {
    address = 'localhost';
  }
  address += ':';

  console.log('Running Far-flung-genius at', address + port);
});

module.exports = server;