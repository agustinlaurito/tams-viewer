'use strict';

const app = require('../app');
const config = require('../config/default');


app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`)
    });