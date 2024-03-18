/*
let btn=document.querySelector('button');
btn.addEventListener('click',input);
function input(){
    let name=prompt("Enter name");
    btn.textContent='rn 1:'+name;
}

const product={
    item :'flower',
    price:40,
    dis:10,
    code:'f40'
}
console.log(product);

function fact(){
    return{
        item :'flower',
        price:40,
        dis:10,
        code:'f40'
    }
}
p1=fact();
console.log(p1);

function fact1(){
    const pro={
        item :'flower',
        price:40,
        dis:10,
        code:'f40'
    }
    return pro;
}
const p1=fact1();
console.log(p1);

function Consfun(item,price){
    this.item=item;
    this.price=price,
    dis=10,
    code='f40'
}
const p1=new Consfun("flower",40);
console.log(p1);
console.log(p1.constructor);

function setdis(value){
    discount=value;
}
function getdis(discount){
    return discount;
}*/
// const array=[1,2,3,4,5,6,7,8,9];
// console.log(array[array.length-1]);
// alert(array);
const array=[
    { 
    name:"Bhide",
    height:170,
    age:40 },
    {
    name: "iyer",
    height:160,
    age:34 },
    {
    name:"jethalal",
    height:167,
    age:45 }]
console.log(array.map(element=>element.name));
console.log(array.name);

