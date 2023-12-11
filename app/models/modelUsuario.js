function Usuario(connection){
    this._connection = connection;
    this._crypto = require('crypto');
}

Usuario.prototype.cadastrarUsuario = function(dados, callback){
    dados.senha = this._crypto.createHash('md5').update(dados.senha).digest('hex');
    this._connection.query('insert into usuario set ?;', dados, callback);
}

Usuario.prototype.validarCadastro = function(email, callback){
    this._connection.query(`select * from usuario where email = '${email}';`, callback)
}

Usuario.prototype.validarLogin = function(dados, callback){
    const senha = this._crypto.createHash('md5').update(dados.senha).digest('hex');
    this._connection.query(`select * from usuario where nome = '${dados.usuario}' and senha = '${senha}' or email = '${dados.usuario}' and senha = '${senha}';`, callback);
}

Usuario.prototype.carregarUsuarios = function(callback){
    this._connection.query('select * from usuario;', callback);
}

Usuario.prototype.carregarUsuario = function(idUsuario, callback){
    this._connection.query(`select * from usuario where id = ${idUsuario};`, callback);
}

Usuario.prototype.carregarTipoUsuarios = function(callback){
    this._connection.query('select * from tipo_usuario;', callback);
}

Usuario.prototype.editarUsuario = function(dados, callback){
    dados.senha = this._crypto.createHash('md5').update(dados.senha).digest('hex');
    this._connection.query(`update usuario set nome = '${dados.nome}', email = '${dados.email}', senha = '${dados.senha}', id_tipo_usuario = ${dados.tipoUsuario} where id = ${dados.idUsuario};`, callback);
}

Usuario.prototype.excluirUsuario = function(idUsuario, callback){
    this._connection.query(`delete from usuario where id = ${idUsuario};`, callback);
}

module.exports = function (){
    return Usuario;
}