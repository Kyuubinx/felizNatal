module.exports = function (app){
    
    app.get('/', function(req, res){
        app.app.controllers.home.index(app, req, res);
    })

    app.get('/cme', function(req, res){
        app.app.controllers.home.cme(app, req, res);
    })

    app.get('/gst', function(req, res){
        app.app.controllers.home.gst(app, req, res);
    })

    app.get('/flr', function(req, res){
        app.app.controllers.home.flr(app, req, res);
    })

}