let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// ✅ Start game on keypress
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        level = 0;
        gameSeq = [];
        levelUp();
    }
});

// ✅ Flash animation for game buttons
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// ✅ Flash animation when user clicks
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

// ✅ Increase level and generate next color
function levelUp() {
    userSeq = []; // reset user input
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log("Game Sequence:", gameSeq);

    btnFlash(randbtn);
}

// ✅ Check user's answer step-by-step
function checkANs(idx) {
    idx = userSeq.length - 1; // compare last pressed button

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000); // small delay before next level
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
       
        setTimeout(function(){
              document.querySelector("body").style.backgroundColor="white";
        },150)      
        resetGame();
    }
}

// ✅ Reset game state
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// ✅ Handle button clicks
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("User Sequence:", userSeq);

    checkANs(userSeq.length - 1);
}

// ✅ Add click events to all buttons
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
