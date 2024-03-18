const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let drops=document.querySelectorAll(".drop select");
let button=document.querySelector("#form button");
let from=document.querySelector(".from select");
let to=document.querySelector(".to select");
let msg=document.querySelector(".msg");

for(let select of drops){
    for(let codes in countryList)
    {
        let opt=document.createElement("option");
        opt.innerText=codes;
        opt.value=codes;
        select.append(opt);
        if(select.name==="from" && codes==="USD")
        opt.selected="selected ";
        else if(select.name==="to" && codes==="INR")
        opt.selected="selected";
    }
    select.addEventListener("change",(evt)=>{
        // console.log(from.value);
        // console.log(evt.target.value);
        flag(evt.target);
    })
}

const flag=((el)=>{
    let code=el.value;
    let curr=countryList[code];
    let imgsrc=`https://flagsapi.com/${curr}/flat/64.png`;
    let img=(el.parentElement).parentElement.querySelector("img");
    img.src=imgsrc;    
    // console.log(img);
})

button.addEventListener(("click"), (evt)=>{
    evt.preventDefault();
    update();
})

const update=async()=>{
    // console.log(from);
    let amt=document.querySelector("input");
    let amtval=amt.value;
    if(amtval=="" ||amtval<1)
    amtval=1;
    amt.value="1";
    const URL=`${url}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let respone= await fetch(URL);
    let data=await respone.json();
    // console.log(data[to.value.toLowerCase()]);
    msg.innerText=`${amtval} ${from.value} = ${data[to.value.toLowerCase()]*amtval} ${to.value}`; 
}

window.addEventListener("load",()=>{
    update();
})