let boxes=document.querySelectorAll(".b");
let rest=document.querySelector(".reset");
let back=document.querySelector(".back")
let msg=document.querySelector(".winner");

let player0=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let count=0;
let a=[];

const dis=()=>{
for(let box of boxes)
box.disabled=true;
}

boxes.forEach((box,j)=>{
    box.addEventListener("click",()=>{
        if(player0){
            count++;
        box.innerText="O";
        player0=false;
        }
        else{
            count++;
        box.innerText="X";
        player0=true;
        }
    box.disabled=true;
        tie();
        a.push(j);
    for(let i=0;i<8;i++)
    {
        if(boxes[win[i][0]].innerText!==""&&boxes[win[i][1]].innerText!==""&&boxes[win[i][2]].innerText!="")
        {
            if(count<=9 && (boxes[win[i][0]].innerText===boxes[win[i][1]].innerText)  && (boxes[win[i][1]].innerText===boxes[win[i][2]].innerText))
            {   
                dis();
                msg.innerText=`Wiiiinnnerrr Is ${boxes[win[i][0]].innerText}!!`;
            }
        }     
                 // console.log(win[i][0],win[i][1],win[i][2]);
                 // console.log(boxes[i].innerText);
                 // console.log(boxes[win[i][0]].innerText);
    }
})
})

const tie=()=>{
    if(count==9){
    for(let i=0;i<8;i++)
    {
    if ((boxes[win[i][0]].innerText!==boxes[win[i][1]].innerText)  && (boxes[win[i][1]].innerText!==boxes[win[i][2]].innerText))
    msg.innerText="Tie";
}}
}

const bck=()=>{
    let bx=document.querySelector(`.box${a[a.length-1]}`);
    a.pop();
    count=a.length;
    // console.log(s[s.length-1]);
    bx.disabled=false;
    bx.innerText="";
    msg.innerText="";
    
    for(let j=0;j<9;j++)
    {
        if(a.includes(j))
        continue;
        else
        boxes[j].disabled=false;
    }
}

back.addEventListener("click",()=>{
    bck();
    if(player0)
    player0=false;
    else
    player0=true;
})

rest.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
    box.innerText="";
    box.disabled=false;
})
        msg.innerText="";
        player0=false; 
        count=0;
        a.splice(0,a.length);  
})