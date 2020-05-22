const express = require('express');
const fs = require('fs');
const option_chain = require('./nse_lib');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'))

app.get('/', (req, res) => res.redirect('/index.html'));
app.get('/chain', async (req, res) => {
    try{
        let resp = await option_chain('NIFTY'); // can enter NIFTY / BANKNIFTY
        res.send(resp);
    }catch(err){
        res.status(500).send(err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
