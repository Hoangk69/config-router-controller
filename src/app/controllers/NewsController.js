class NewsController{
    // [GET] /news
    index(req, res){
        res.render('news');
    }
    // [GET] /news/:slug
    slug(req, res){
        res.render('news');
    }
    // [POST] /news
    send(req, res){
        res.render('news');
    }
}
module.exports = new NewsController;