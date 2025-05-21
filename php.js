function fetchjson(mode,data){
    xhr = new XMLHttpRequest()
    if(mode=='GET'){url='http://f1059512.xsph.ru/Nikolaychik/loader.php'}else{url='http://f1059512.xsph.ru/Nikolaychik/saver.php'}
    xhr.open(mode, url, true)
    xhr.send(JSON.stringify(data))
    xhr.responseType = 'json'
    xhr.onload=gettingjson
}
function gettingjson(){
    fetchjsonout=xhr.response
    ready()
}