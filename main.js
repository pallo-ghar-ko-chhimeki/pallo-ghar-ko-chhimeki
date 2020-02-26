const baseUrl = 'https://api.engineeringdote.com/'
var data = {};
let token = sessionStorage.getItem('access_token');
function addData(name, val){
    data[name] = val;
}
function req(to,method){
    let xh = new XMLHttpRequest();
    xh.open(method,to, true);
    xh.setRequestHeader('Authorization' , 'Bearer '+token);
    xh.onreadystatechange = function(e){
        addData('user',e.target.response);
    }
    xh.send(method,to, true);
    return xh.response;
}
req(baseUrl+'student','GET');
setTimeout(() => {
    console.log(data);
}, 1000);
