let btn=document.querySelector("button");
/*btn.onclick=()=>{
    console.log("button was clicked");
    alert("button was clicked");
}
let btn2=document.querySelector("button");
btn2.addEventListener("click",()=>{
    console.log("clicked");
})
btn2.addEventListener("click",()=>{
    alert("handler 2");
})*/
document.querySelector("body").style.backgroundColor="white";
btn.addEventListener("click",(e)=>{
    if(document.querySelector("body").style.backgroundColor=="white")
    document.querySelector("body").style.backgroundColor="black";
else
document.querySelector("body").style.backgroundColor="white";
console.log("Mode change");
})