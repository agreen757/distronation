const express = require('express');
const port = process.env.PORT;
const app = express();
const http = require('http').createServer(app);



app.use(express.static('build'))

app.get('/',(req,res)=>{

    res.sendFile('index.html')
})
app.get('*', (req, res) => {
    res.redirect('/')
})

http.listen(port);