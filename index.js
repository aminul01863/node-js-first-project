const express = require('express');

const app = express();

// const rootCall = (req, res) => res.send('Thank You')



app.get('/', (req, res) => {
    res.send('Welcome To Node JS')
})

app.listen(3000, () => console.log('Listen to port 3000'));