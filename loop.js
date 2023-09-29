//while loop
let i=10;
while(i<15)
{
    console.log(i);
    i++;
}
//for loop
for(let j=0;j<20;j++)
{
    console.log(j);
}
//do while loop
let k=10;
do
{
    console.log(k);
    k++;
}while(k<9);
//for loop in array
let fruits=["apple","mango","grapes","banana"];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
//for in loop in object
let car={
    model:2020,
    color:"black",
    company: "toyoto"
}
console.log(car);
for(let key in car)
{
    console.log(car[key]);
}
//