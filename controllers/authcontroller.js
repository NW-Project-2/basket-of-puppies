var exports = module.exports = {}

exports.register = function(req, res) {

    res.render('register.handlebars');

}

exports.login = function(req, res) {

    res.render('login.handlebars');

}

exports.index = function(req, res) {

    res.render('index');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/login');

    });

}