const newsRouter = require('./news');
const siteRouter = require('./site')
function router(app){
    app.use('/news', newsRouter);
    app.use('/',siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })
    
    // app.get('/search', (req, res)=>{
    //     res.render('search')
    // })
    
    // app.post('/news',(req, res)=>{
    //     res.render('news')
    // })
}
module.exports = router;