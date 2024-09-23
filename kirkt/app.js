const express = require ('express');
const bodyparser = require('body-parser');
const routes = require('./router/routes')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.get('/', routes);
app.listen(3000, ()=>{
    console.log('server running on http://localhost:3000/');
});
