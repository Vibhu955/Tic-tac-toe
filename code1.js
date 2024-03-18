/*{
    console.log("HI");
}
{
name="Vibhuti";
console.log(name+" age=19");
}
const student={
    name: "Vibhuti joshi",
    age:19,
    yr : 2 ,
    cgpa:8.8,
};
student["age"]+=1;
console.log(student);
console.log(student.age);
const info=
{
    name: "pen",
    rating:4,
    offer:0.5,
    price:270,
    isDeal:true
};
console.log(info);
let a=12;
let b=10;
console.log("Sum:"+(a+b)+"\nExp:"+(a**2));
let n=prompt("Enter num");
if(n%5===0)
console.log("Multiple");
else
console.log("Not same type");
let name ="Vibhuti";
for(let i of name)
console.log(i);
for(let i in name)
console.log(i,name[i]);

const student={
    fullname: "Vibhuti joshi",
    age:19,
    yr : 2 ,
    cgpa:8.8,
};
console.log(student['age']);
for (let i in student)
console.log(i,student[i]);
*/
/*
let a=prompt("Guess d value");
while(a!=20)
{
    a=prompt("Guess d value again");
    console.log(a);
}
console.log(typeof(a));

console.log(`vibhuti is ${19}yrs old studying in ${1+1} yr  `);
let s="V J ";
console.log(s+s.length);
let s="hello";
console.log(s=s.replace('e','o'));
console.log(s.replace('lo','la'));
let a=prompt("enter full name");
alert(`Suggestions: ${"@".concat(a,a.length)}`);

let a=["Bloomberg","Microsoft","Uber","Google","Ibm","Netflix"];
console.log(a.shift());
console.log(a);
console.log(a.splice(1,1,"Ola"));
console.log(a);
console.log(a.push("Amazon"));
console.log(a);*/
let arr=[];
let a=prompt("Enter no.");
while(a!=-1)
{
    arr.push(a);
    a=prompt("Enter no.");
}
for (const i of arr)
console.log(i);    
arr.forEach((val,index)=>{
    console.log(val*val);
    // arr.splice(index,1,val*val);
});
let arr2= arr.map((value)=>{
    return value**2;
})
let arr3=arr.filter((val)=>{
    return val%2==0;
});
let arr4=arr.filter(function my(val){
    return val%2==0;
});
let result=arr.reduce((prev,curn)=>{
    return prev>curn?prev:curn;
})
