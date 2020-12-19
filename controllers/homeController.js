exports.index = (req, res) => {
    let obj = {
        pageTitle: "Thiago jose",
        userInfo: req.userInfo
    }; 
    res.render('home', obj); 
};