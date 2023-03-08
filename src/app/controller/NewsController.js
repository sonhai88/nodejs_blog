// Function controller render router and logic code 
class NewsController {
    
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    // Slug phần trong URL , sau Tên miền, tạo permalink
    show(req, res){
        res.render('details');
    }
}

module.exports = new NewsController();