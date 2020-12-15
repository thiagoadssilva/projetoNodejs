exports.userMiddleware = (req, res, next) =>{
    let info = {name: 'thiago jose', id:123}
    req.userInfo = info;
    next();        
};

exports.index = (req, res) => {
    let obj = {
        pageTitle: "Thiago jose",
        userInfo: req.userInfo
    }; 
    res.render('home', obj); 
};