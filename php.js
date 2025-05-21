function fetchjson(mode,data){
    xhr = new XMLHttpRequest()
    if(mode=='GET'){url='https://minewoolf42.github.io/Nikolaychik/loader.php'}else{url='https://minewoolf42.github.io/Nikolaychik/saver.php'}
    xhr.open(mode, url, true)
    xhr.send(JSON.stringify(data))
    xhr.responseType = 'json'
    xhr.onload=gettingjson
}
function gettingjson(){
    fetchjsonout=xhr.response
    ready()
}
