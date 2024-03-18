let choices=document.querySelectorAll(".icons div");
let msg=document.querySelector(".msg");
let cs=document.querySelector("#cs");
let choiceComp=document.querySelectorAll(".ch");
let ms=document.querySelector("#ms");
let my=0,comp=0;
        
msg.innerText="Play Your Move";  
msg.classList.remove("show");

const Comp=(opt,ch)=>{
    choiceComp.forEach((choice)=>{
        choice.innerText="";
    })

    if(opt[ch]=="stone")
    choiceComp[1].innerText="Comp!";
    else if(opt[ch]=="paper")
    choiceComp[0].innerText="Comp!";
    else if(opt[ch]=="scissor")
    choiceComp[2].innerText="Comp!";
}

const compChoice=()=>{
    const opt=["stone","paper","scissor"];
    let ch=Math.floor(Math.random()*3);
    Comp(opt,ch);
    return opt[ch];
}

const draw=()=>{
    msg.innerText="";
    msg.style.backgroundColor="yellow";
    // msg.classList.remove("msg");
    msg.classList.add("show");
}

const game=(user)=>{
    let ch=compChoice();
    // msg.classList.add("msg");
    msg.classList.remove("show");
    msg.innerText="Play Your Move";
    if(ch=="scissor" && user=="paper" ||ch=="stone"&& user=="scissor"||ch=="paper"&& user=="stone")
    {
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
        comp++;
        cs.innerText=comp;
    }
    else if(ch==user){
        draw();
        }
    else
    {
        my++;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
        ms.innerText=my;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let user=choice.getAttribute("class");
        game(user);
})
})