window.onload = checkpage(window.location.href);

function checkpage(url){
    if(url.split('/').pop() == 'home.html'){
        document.getElementById('searchBus').addEventListener('click', function(){
            var fLctn = document.getElementById('lv-ltn').value;
            var lLctn  = document.getElementById('ar-ltn').value;
            var lDate = document.getElementById('lv-date').value;
            console.log( fLctn)
            check(fLctn, lLctn,lDate)
        });
    } else {
        document.getElementById('f-dpt').innerHTML  = getAllUrlParam(decodeURIComponent(window.location.href)).fLctn;
        document.getElementById('to-dst').innerHTML  = getAllUrlParam(decodeURIComponent(window.location.href)).lLctn;
        document.getElementById('date').innerHTML  = getAllUrlParam(decodeURIComponent(window.location.href)).lDate;
    }
}

function check(fLctn, lLctn,lDate){
let redirect = '../views/search.html';
    let parameters = encodeURIComponent('fLctn='+ fLctn, 'lLctn='+ lLctn, 'lDate'+ lDate);

    if(`${fLctn == "Nairobi" && lLctn == "Machakos" && lDate == ""}` || `${fLctn == "Nairobi" && lLctn == "Makueni" && lDate == ""}` || `${fLctn == "Machakos" && lLctn == "Kitui" && lDate == ""}`){
        window.open(redirect + "?" + parameters)
    } else{
        window.alert("Please fill the missing field..")
    }
}


//validate the input details..

function getAllUrlParam(url){
    var queryString =  url ? url.split('?')[1] : window.location.search.slice(1);

    var obj = {}

    if(queryString){
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');

        for( var i = 0; i < arr.length; i++){
            var a = arr[i].split('=')
            var paramName = a[0]
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            paramName = paramName.toLowerCase();
            if(typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            if(paramName.match(/\[(\d+)?\]$/)){
                var key = paramName.replace(/\[(\d+)?\]$/, '');
                if(!obj[key] ) obj[key] = []

                if(paramName.match(/\[(\d+)?\]$/)){
                    var index = /\[(\d+)?\]$/.exec(paramName)[1]
                    obj[key][index] = paramValue
                } else {    
                    obj[key].push(paramValue)
                }
            } else {
                if(!obj[paramName]){
                    obj[paramName] = paramValue
                } else if(obj[paramName] && typeof obj[paramValue] === 'string'){
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue)
                }
            }
        }
    }

    return obj;
}

// create the payment details

function stripeHandler(){

}
