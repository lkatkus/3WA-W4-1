var btn = document.getElementById("recBtn");
var rec = document.getElementById("rec");

btn.addEventListener("click",function(){
    rec.classList.toggle("display");
})

rec.addEventListener("mouseover",function(){
    rec.classList.toggle("good");
})

rec.addEventListener("mouseleave",function(){
    rec.classList.toggle("good");
})

rec.addEventListener("dblclick",function(){
    rec.classList.toggle("important");
})
