const express = require('express')
const app = express();

app.get('/', () => {
    console.log('Welcome to Song Sample backend');
})



module.exports = app
