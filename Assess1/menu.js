var opendiv = document.getElementById("open")
var closediv = document.getElementById("close")
var menudiv = document.getElementById("menu")

opendiv.addEventListener("click",function(){
    menudiv.style.left = "0px";
})
closediv.addEventListener("click",function(){
    menudiv.style.left = "-110px";
})
