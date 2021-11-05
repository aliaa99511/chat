




var chat=document.getElementById("chat");
var content=document.getElementById("content");
var close=document.getElementById("close")

chat.addEventListener("click",function(){

    content.classList.toggle("hidden");
    
});

close.addEventListener("click",function(){
    content.classList.toggle("hidden");
    this.style.opacity="0.7"
});