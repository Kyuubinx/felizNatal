module.exports.cadastroUsuario = function (app, req, res){
    res.render('../views/usuario/cadastroUsuario', {errors: {}, user: {}})
}

module.exports.cadastrar = function(app, req, res){   

    const dados = req.body;

    req.assert('nome', 'Campo nome está vazio!').notEmpty();
    req.assert('email', 'Campo do email está vazio!').notEmpty();
    req.assert('senha', 'Preencher campo da senha').notEmpty();
    req.assert('senha', 'A senha deve conter no mínimo 8 digítos').len(8, 999);

    const errors = req.validationErrors();

    if(errors){
        res.render('./usuario/cadastroUsuario', {errors: errors, user: dados});
        return;
    }

    const connection = app.config.connection;
    const modelUsuario = new app.app.models.modelUsuario(connection);

    modelUsuario.validarCadastro(dados.email, function(error, result){
        if(result.length > 0){
            let errors = [{msg: 'Este e-mail já está cadastrado!'}];
            res.render('./usuario/cadastroUsuario', {errors: errors, user: dados});
        }
        else{
            modelUsuario.cadastrarUsuario(dados, function(error, result){
                res.redirect('/login');
            })
        }
    })    
}

module.exports.login = function (app, req, res){
    res.render('../views/usuario/login', {errors: {}, user: {}})
}

module.exports.validarLogin = function (app, req, res){
    const dados = req.body;

    req.assert('usuario', 'Campo usuario está vazio!').notEmpty();
    req.assert('senha', 'Preencher campo da senha').notEmpty();

    const errors = req.validationErrors();

    if(errors){
        res.render('./usuario/login', {errors: errors, user: dados});
        return;
    }

    const connection = app.config.connection;
    const modelUsuario = new app.app.models.modelUsuario(connection);

    modelUsuario.validarLogin(dados, function(error, result){           
        
        if(result.length > 0){
            req.session.id_tipo_usuario = result[0].id_tipo_usuario;
            res.redirect('/');
        }
        else{
            let errors = [{msg: 'Usuário ou Senha estão incorretos!'}];
            res.render('./usuario/login', {errors: errors, user: dados});
        }
    })
}

module.exports.sair = function (app, req, res){
    req.session.destroy(function(error){                       
        res.redirect('/login');
    });      
}