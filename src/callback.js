const XMLHttRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://dragon-ball-api.herokuapp.com/api';

function fetchAPI(url,callback){
    var req = new XMLHttRequest()
    req.open('GET',url,true)
    req.onreadystatechange = function(event){
        if(req.readyState == 4){
            if(req.status == 200){
                callback(null,JSON.parse(req.responseText))
            }else{
                const err = new Error(`URL invalid ${url}`)
                return callback(err,null)
            }
        }
    }

    req.send()
}

module.exports = fetchAPI