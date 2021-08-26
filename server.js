// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv')
// }

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const express = require('express')
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/Search', function(req, res){
    fs.readFile('items.json',  function(error, data){
        if(error){
            res.status(500).end()
        } else  {
            res.render('Search.ejs', {
                stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
           
        }
    })
});

app.post('/purchase', function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        } else{
            console.log('Booked successfully')
        }
    })
})

app.listen('3000', () => {
    console.log("Server started on port 3000")
})