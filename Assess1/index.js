var bg1b = document.getElementById("bg1")
var bg2b = document.getElementById("bg2")
var bg3b = document.getElementById("bg3")
var bg4b = document.getElementById("bg4")
var ch1b = document.getElementById("ch1")
var ch2b = document.getElementById("ch2")
var ch3b = document.getElementById("ch3")
var zoomdiv = document.getElementById("zoom")
var makebgdiv = document.getElementById("makebg")
var resetb = document.getElementById("reset")
var showb = document.getElementById("showapp")
var hideb = document.getElementById("hideapp")
var bgb = document.getElementById("bg")
var app1div = document.getElementById("app1")
var zoomcon = document.getElementById("zoomcontrols")
var buttonplus =document.getElementById("plus")
var buttonminus = document.getElementById("minus")


bg1b.addEventListener("click",function(){
    ch1b.style.backgroundImage = "url('./imgs/i1.jpg')"
    ch2b.style.backgroundImage = "url('./imgs/i2.jpg')"
    ch3b.style.backgroundImage = "url('./imgs/i3.jpg')"
})
bg2b.addEventListener("click",function(){
    ch1b.style.backgroundImage = "url('./imgs/i4.jpg')"
    ch2b.style.backgroundImage = "url('./imgs/i5.jpg')"
    ch3b.style.backgroundImage = "url('./imgs/i6.jpg')"
})
bg3b.addEventListener("click",function(){
    ch1b.style.backgroundImage = "url('./imgs/i7.jpg')"
    ch2b.style.backgroundImage = "url('./imgs/i8.jpg')"
    ch3b.style.backgroundImage = "url('./imgs/i9.jpg')"
})
bg4b.addEventListener("click",function(){
    ch1b.style.backgroundImage = "url('./imgs/i10.jpg')"
    ch2b.style.backgroundImage = "url('./imgs/i11.jpg')"
    ch3b.style.backgroundImage = "url('./imgs/i12.jpg')"
})

bg1b.addEventListener("click",function(){
ch1b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i1.jpg')"
})
ch2b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i2.jpg')"
})
ch3b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i3.jpg')"
})
    
})
bg2b.addEventListener("click",function(){
ch1b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i4.jpg')"
})
ch2b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i5.jpg')"
})
ch3b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i6.jpg')"
})
})

bg3b.addEventListener("click",function(){
ch1b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i7.jpg')"
})
ch2b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i8.jpg')"
})
ch3b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i9.jpg')"
})
})

bg4b.addEventListener("click",function(){
ch1b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i10.jpg')"
})
ch2b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i11.jpg')"
})
ch3b.addEventListener("mouseenter",function(){
    zoomdiv.style.backgroundImage = "url('./imgs/i12.jpg')"
})
})

makebgdiv.addEventListener("click",function(){
    bgb.style.backgroundImage = zoomdiv.style.backgroundImage
})
resetb.addEventListener("click",function(){
    bgb.style.backgroundImage = "none"
})
showb.addEventListener("click",function(){
    app1div.style.display = "block"
})
hideb.addEventListener("click",function(){
  app1div.style.display = "none"  
})
zoomdiv.addEventListener("click",function(){
    zoomcon.style.display = "inline-block"
})


var zoomW = 100
var zoomH = 70

buttonplus.addEventListener("click",function(){
    if(zoomW < 91 && zoomH <64){
    zoomW += 10
    zoomH += 7
}else if (zoomW>11 &&zoomH>8) {
}
    zoomdiv.style.width = zoomW + "%"
    zoomdiv.style.height = zoomH + "%"
})

  
buttonminus.addEventListener("click",function(){
    if(zoomW < 91 && zoomH <64){
    
}else if (zoomW>11 &&zoomH>8) {
    zoomW -= 10
    zoomH -= 7
}
   
    zoomdiv.style.width = zoomW + "%"
    zoomdiv.style.height = zoomH + "%"
})
    
document.getElementById("input").addEventListener("change", function(){
    var myNum = parseInt(input.value);
    
    if(myNum <1 || myNum >12) {
        alert("Doesn't exist!");
    } else {
        bgb.style.backgroundImage = "url(imgs/i"+myNum+".jpg)";
    }
})
var ImgNum1 = 1;
var ImgNum2 = 2;
var ImgNum3 = 3;
var previousdiv = document.getElementById("previous")
var nextdiv = document.getElementById("next")

previousdiv.addEventListener("click", function(){
    ImgNum1 -= 1;
    ImgNum2 -= 1;
    ImgNum3 -= 1;
    
    if(ImgNum1 <= 0){
        ImgNum1 = 12;
    } else if (ImgNum2 <= 0) {
        ImgNum2 = 12;       
    } else if (ImgNum3 <= 0) {
        ImgNum3 = 12;
    }
    
    ch1b.style.backgroundImage = "url(imgs/i"+ImgNum1+".jpg)";
    ch2b.style.backgroundImage = "url(imgs/i"+ImgNum2+".jpg)";
    ch3b.style.backgroundImage = "url(imgs/i"+ImgNum3+".jpg)";
});

nextdiv.addEventListener("click", function(){
    
    ImgNum1 += 1;
    ImgNum2 += 1;
    ImgNum3 += 1;
    
    if(ImgNum1 >= 13){
        ImgNum1 = 1;
    } else if (ImgNum2 >= 13) {
        ImgNum2 = 1;
    } else if (ImgNum3 >= 13) {
        ImgNum3 = 1;
    }
    
    ch1b.style.backgroundImage = "url(imgs/i"+ImgNum1+".jpg)";
    ch2b.style.backgroundImage = "url(imgs/i"+ImgNum2+".jpg)";
    ch3b.style.backgroundImage = "url(imgs/i"+ImgNum3+".jpg)";
});
