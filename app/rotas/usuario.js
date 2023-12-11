module.exports = function (app){

    app.get('/cadastroUsuario', function(req, res){
        app.app.controllers.usuario.cadastroUsuario(app, req, res);
    });

    app.post('/usuario/cadastrar', function(req, res){
        app.app.controllers.usuario.cadastrar(app, req, res);
    });

    app.get('/login', function(req, res){
        app.app.controllers.usuario.login(app, req, res);
    })

    app.post('/usuario/validarLogin', function(req, res){
        app.app.controllers.usuario.validarLogin(app, req, res);
    })

    app.get('/usuario/sair', function (req, res){
        app.app.controllers.usuario.sair(app, req, res);
    })
}