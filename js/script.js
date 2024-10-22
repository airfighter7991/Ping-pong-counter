document.getElementById("main_frame").style.height = window.innerHeight-2+"px";
console.log(window.innerHeight);

var l = document.getElementById("lft");
l.innerHTML = 0
var r = document.getElementById("rght");
r.innerHTML = 0

var al = document.getElementById("wind");
var cpt = document.getElementById("caption");
valid = true;

function inc(s){
    if (s==="l"){
        l.innerHTML++
        
    }else{
        r.innerHTML++
    }
    if(l.innerHTML>=21 && valid){
        cpt.innerHTML = "Левый игрок победил."
        al.style.display = "block";
    }
    if(r.innerHTML>=21 && valid){
        cpt.innerHTML = "Правый игрок победил."
        al.style.display = "block";
    }
}
function cl(){
    al.style.display = "none";
    valid= false;
}