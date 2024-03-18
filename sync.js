/*
    ___----Timeouts----___
console.log("1");
console.log("2");

function hello()
{
    console.log("heyyyy!");
}
setTimeout(hello,3000);

console.log("3");
console.log("4");
*/
/*
    Callbacks
function get(data,nextData)
{
    setTimeout(()=>{
        console.log("Data:",data);
    if(nextData){
    nextData();
    console.log("yes");
    }
    },2000);
}

get(1,()=>{
        console.log("calling data 2");
    get(2,()=>{
        console.log("calling data 3");
        get(3);
    });
;});
*/

/* 
    ____-----Promises-----_____
// let promise=new Promise((resolve,reject)=>{
//     console.log("Promisessssssss");
//     resolve("Succes");
//   //  reject("some error");
// }

function get(data,nextData)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data: ",data);
            resolve("success");
            // if(nextData)
            // {
            //     console.log("Next data ");
            //  nextData();
            // }
        },2000);
    })
}
// let promise=get(1,get(1).then((res)=>{
//     get(2);
//     console.log(res);
// }));
// let promise=get(1);
// promise.then((res)=>{
//     console.log(res);
//     get(2).then((res)=>{
//         console.log(res);
//     })
// }
// )
get(1).then((res)=>{
    console.log(res);
    return get(2);
}).then((res)=>{
    return get(3);
}).then((res)=>{
    console.log(res);
});
*/

/*
   ____----Async awaits----_____
function get(data)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data:",data);
            resolve(200);
        },2000);
    })
}
(async function getData(){
    await get(1);
    console.log("getting data 2");
    await get(2);
    console.log("getting data 3");
    await get(3);
})();
// getData();
*/

//                                             --------APIs-------

const url="https://cat-fact.herokuapp.com/facts";
let btn=document.querySelector("#btn");
let fact=document.querySelector("#facts");

// btn.addEventListener("click",async()=>{{
//     console.log("data fetchingg");
//     let response=await fetch(url);//respone = promise //JSON format
//     console.log(response);
//     let promise2 = await response.json();
//     console.log(promise2[2].text);
// fact.innerText=promise2[2].text;}
// });


btn.addEventListener("click",()=>{(
    fetch(url).then((Response)=>{
       return Response.json();
    }).then((data)=>{
        console.log(data[1].text);
    fact.innerText=data[1].text;
}))
})