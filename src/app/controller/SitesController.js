// Function controller render router and logic code 
class SitesController {
    
  

    // [GET] /news/:slug
    // Slug phần trong URL , sau Tên miền, tạo permalink
    search(req, res){
        res.render('search');
    }

      // [GET] /news
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SitesController();