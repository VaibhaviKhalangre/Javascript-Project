// // let h2 = document.querySelector("h2");
// // console.dir(h2.innerText);

// // h2.innerText = h2.innerText + " From Apna College Students";

// // let divs = document.querySelectorAll(".box");
// // let idx=1;
// // for(div of divs){
// //    div.innerText=`new unique value ${idx}`;
// //    idx++;
// // }

// // let newBtn=document.createElement("button");
// // newBtn.innerText="click me!";
// // console.log(newBtn);

// // let div = document.querySelector("div");
// // div.append(newBtn);

// // let newHeading = document.createElement("h1");
// // newHeading.innerHTML ="<i>Hi,I am new!</i>";

// // document.querySelector("body").prepend(newHeading);


// // let para=document.querySelector("p");
// // para.remove();

// let newBtn =document.createElement("button");
// newBtn.innerText = "Click me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

let btn1 = document.querySelector("#btn1");
// btn1.onclick =(evt)=>{
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX,evt.clientY);
// };

// btn1.addEventListener("click",(evt)=>{
//    console.log("Button1 was clicked1");
// });

// btn1.addEventListener("click",()=>{
//    console.log("Button1 was clicked2");
// });

// const handler3=()=>{
//    console.log("button1 was clicked - handler3");
// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",(evt)=>{
//    console.log("Button1 was clicked4");
// });

// btn1.removeEventListener("click",handler3);

//let div = document.querySelector("div");

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

if (modeBtn) { // Ensure modeBtn is not null (element with ID "mode" exists)
    modeBtn.addEventListener("click", () => {
        if (currMode === "light") {
            currMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            currMode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
        console.log(currMode);
    });
} else {
    console.error("Error: Element with ID 'mode' not found in the HTML.");
}



  