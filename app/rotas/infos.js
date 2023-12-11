module.exports = function (app){
    
    app.get('/notasCME/:id', function(req, res){
        app.app.controllers.infos.carregarInfosCME(app, req, res);
    })

    app.get('/notasFLR/:id', function(req, res){
        app.app.controllers.infos.carregarInfosFLR(app, req, res);
    })

    app.get('/notasGST/:id', function(req, res){
        app.app.controllers.infos.carregarInfosGST(app, req, res);
    })

}