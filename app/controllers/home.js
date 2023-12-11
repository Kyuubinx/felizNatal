module.exports.index = function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }    

    res.render('../views/home/index', {userType: req.session.id_tipo_usuario});
}

module.exports.cme = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }  

    const data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if(dia < 10){
        dia = "0" + dia;
    }

    const api = await fetch("https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd");

    const apiJson = await api.json();
    
    res.render("home/cme", {api: apiJson});
}

module.exports.gst = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }  

    const data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if(dia < 10){
        dia = "0" + dia;
    }

    const api = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd`)

    const apiJson = await api.json();
    
    res.render("home/gst", {api: apiJson});
}

module.exports.flr = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }  

    const data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if(dia < 10){
        dia = "0" + dia;
    }

    const api = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd`)

    const apiJson = await api.json();  

    res.render("home/flr", {api: apiJson});
}

module.exports.flr = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }  

    const data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if(dia < 10){
        dia = "0" + dia;
    }

    const api = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd`)

    const apiJson = await api.json();  

    res.render("home/flr", {api: apiJson});
}