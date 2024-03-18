document.body.childNodes[8].innerText ="Vibhuti";

let btn=document.createElement("button");
btn.innerText="Click me";
btn.style.backgroundColor= "red";
btn.style.color="white";

document.querySelector("body").prepend(btn);

let p=document.querySelector("p");
p.classList.add("mynewp")

/*
    classes!!

class user{
    constructor(name,email){
    this.name= name;
    this.email= email;
    }
    view()
{
    console.log("Name:",this.name);
    console.log("email:",this.email);
}
}
let obj=new user("Vibhuti","vibhu.us24@gmail.com");

class admin extends user{
f
     edit()
    {
    console.log("Name:",this.name);
    console.log("Name:",this.email);
    }
}
let obj2=new admin("Vibzz","vibhuti.2022@gmail.com"); */