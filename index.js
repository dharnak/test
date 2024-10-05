document.getElementById("but1log").addEventListener("click",function(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2").value;
    //
    
    //
    if (a==="Dharneesh" && b==="Dharneesh"){
        window.location.href="/index2.html"
       }else{
           alert("user name and password wrong")
       }
})