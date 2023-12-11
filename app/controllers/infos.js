const { json } = require("body-parser");

module.exports.carregarInfosCME = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }

    const idInfo = req.params.id;

    const api = await fetch("https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd");

    const apiJson = await api.json();

    for(let i = 0; i < apiJson.length; i++){
        if(idInfo == apiJson[i].activityID){
            
            const ano = idInfo.slice(0, 4)
            const mes = idInfo.slice(5, 7)
            const dia = idInfo.slice(8, 10)

            let data = JSON.stringify(`${idInfo.slice(8, 10)}/${idInfo.slice(5, 7)}/${idInfo.slice(0, 4)}`);
            data = data.replace(/(^\"+|\"+$)/mg, ''); 

            const cme = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME?startDate=${ano}-${mes}-${dia}&endDate=${ano}-${mes}-${dia}`);
            const cmeJson = await cme.json();

            res.render("infos/cme", {infosCME: cmeJson, data: data});
        }
    }
    
}

module.exports.carregarInfosFLR = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }

    const idInfo = req.params.id;

    const api = await fetch("https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd");

    const apiJson = await api.json();

    for(let i = 0; i < apiJson.length; i++){
        if(idInfo == apiJson[i].flrID){
            
            const ano = idInfo.slice(0, 4)
            const mes = idInfo.slice(5, 7)
            const dia = idInfo.slice(8, 10)

            let data = JSON.stringify(`${idInfo.slice(8, 10)}/${idInfo.slice(5, 7)}/${idInfo.slice(0, 4)}`);
            data = data.replace(/(^\"+|\"+$)/mg, ''); 

            const flr = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=${ano}-${mes}-${dia}&endDate=${ano}-${mes}-${dia}`);
            const flrJson = await flr.json();

            res.render("infos/flr", {infosFLR: flrJson, data: data});
        }
    }
    
}

module.exports.carregarInfosGST = async function(app, req, res){

    if(req.session.id_tipo_usuario != 1 && req.session.id_tipo_usuario != 2){
        res.redirect('/login');
        return;
    }

    const idInfo = req.params.id;

    const api = await fetch("https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd");

    const apiJson = await api.json();

    for(let i = 0; i < apiJson.length; i++){
        if(idInfo == apiJson[i].gstID){
            
            const ano = idInfo.slice(0, 4)
            const mes = idInfo.slice(5, 7)
            const dia = idInfo.slice(8, 10)

            let data = JSON.stringify(`${idInfo.slice(8, 10)}/${idInfo.slice(5, 7)}/${idInfo.slice(0, 4)}`);
            data = data.replace(/(^\"+|\"+$)/mg, ''); 

            const gst = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST?startDate=${ano}-${mes}-${dia}&endDate=${ano}-${mes}-${dia}`);
            const gstJson = await gst.json();

            res.render("infos/gst", {infosGST: gstJson, data: data});
        }
    }
    
}