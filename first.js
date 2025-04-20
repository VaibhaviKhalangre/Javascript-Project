
/*const product={
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:270
};

console.log(product);*/

/*let mode="dark";
let color;

if(mode==="dark"){
    color:"black";
}

if(mode==="light"){
    color="white";
}
console.log(color);*/

/*let gameNum = 25;
let userNum = prompt("Guess the number:");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number.Guess again");
}

console.log("Congratulations,you entered the right number");
*/

//Template Literals
/*let specialString=`This is a template literals ${1 + 2 + 3}`;
console.log(specialString);*/

/*let fullName = prompt("Enter your fullname without spaces");
let username="@" + fullName + fullName.length;
console.log(username) ; 
*/
/*
let heroes =["ironman","thor","hulk","shaktiman"];

for(let hero of heroes){
    console.log(hero);
}

let marks=[85,97,44,37,76,60];
let sum=0;

for(let val of marks){
    sum += val;
}
let avg =sum/marks.length;
console.log(`avg marks of the class = ${avg}`);
*/
function countVowels(str){
    let count = 0;
    for(const char of str)
       {
        if(char === "a" || char ==="e" || char ==="i"  || char==="o" || char==="u"){
            {
        count++;  }  
        }
       }
       console.log(count);

}
/*
let arr =["Pune","delhi","mumbai"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});
*/
/*
let nums = [2,3,4,6,7,8];

let calcSquare=(num)=>{
    console.log(num * num);
}
nums.forEach(calcSquare);
*/

let nums = [67,52,39];
nums.map((val)=>{
    console.log(val);
});

let newArr = nums.map((val)=>{
   return val*2;
});
console.log(newArr);

let calcSquare=(num)=>{
console.log(num*num);
};

let arr=[1,2,3,4,5,6,7,8,9];

let evenArr = arr.filter((val)=>{
    return val % 2 === 0;
})
console.log(evenArr);

let n=prompt("Enter a number:");
let arr1 = [];

for(let i = 1;i <= n; i++){
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res,curr)=>{
       return res + curr;
});
console.log(sum);

