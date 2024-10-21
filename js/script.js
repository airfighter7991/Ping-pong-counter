document.getElementById("main_frame").style.height = window.innerHeight-2+"px";
console.log(window.innerHeight);

var l = document.getElementById("lft");
l.innerHTML = 0
var r = document.getElementById("rght");
r.innerHTML = 0

function inc(s){
    if (s==="l"){
        l.innerHTML++
    }else{
        r.innerHTML++
    }
}