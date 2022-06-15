const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const path = require('path')
const routers = require('./resources/routes')


app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// midoware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router
routers(app);


// app.get('/news',(req, res)=>{
//   res.render('news')
// })

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
