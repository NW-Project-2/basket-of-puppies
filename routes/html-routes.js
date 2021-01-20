var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

app.get("/", function(req, res) {
    res.render("index")
})

app.get("/search", function(req,res) {
    res.render("./partials/search");
});

app.get("/update", function(req,res) {
    res.render("./partials/update");
});

};