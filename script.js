/* =====================================================
   Happy Birthday Vignesh ❤️
   Part 1
====================================================== */

let currentScene = 0;
let typingFinished = false;

// Scene Order
const scenes = [
    "loading",
    "welcome",
    "scanner",
    "memories",
    "gallery",
    "future",
    "video",
    "ending"
];

// Wait until everything is loaded
window.addEventListener("load", () => {

    showLoading();

    setupButtons();

    setupMusic();

});



/* ==========================================
Loading Screen
========================================== */

function showLoading(){

    const loading=document.getElementById("loading");

    if(!loading) return;

    let percent=0;

    const text=document.getElementById("loadingText");

    const bar=document.getElementById("loadingBar");

    const timer=setInterval(()=>{

        percent++;

        if(text)
            text.innerHTML=percent+"%";

        if(bar)
            bar.style.width=percent+"%";

        if(percent>=100){

            clearInterval(timer);

            setTimeout(()=>{

                hideScene("loading");
                showScene("welcome");

                startTyping();

            },600);

        }

    },30);

}



/* ==========================================
Typewriter
========================================== */

function startTyping(){

    const target=document.getElementById("typing");

    if(!target) return;

    new Typed("#typing",{

        strings:[
            "Happy Birthday Vignesh ❤️",
            "Are you excited to see your 34th year?",
            "I have something special for you..."
        ],

        typeSpeed:55,

        backSpeed:20,

        backDelay:1500,

        showCursor:true,

        loop:false,

        onComplete:function(){

            typingFinished=true;

            document.getElementById("futureBtn")
            ?.classList.add("show");

        }

    });

}



/* ==========================================
Buttons
========================================== */

function setupButtons(){

    const futureBtn=document.getElementById("futureBtn");

    if(futureBtn){

        futureBtn.addEventListener("click",()=>{

            nextScene("scanner");

        });

    }

}



/* ==========================================
Scene Navigation
========================================== */

function hideScene(id){

    const scene=document.getElementById(id);

    if(scene){

        scene.classList.remove("active");

        scene.classList.add("hidden");

    }

}

function showScene(id){

    const scene=document.getElementById(id);

    if(scene){

        scene.classList.remove("hidden");

        scene.classList.add("active");

    }

}

function nextScene(id){

    document
    .querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.remove("active");

        screen.classList.add("hidden");

    });

    showScene(id);

    if(id==="scanner"){

        startScanner();

    }

}



/* ==========================================
Future Scanner
========================================== */

function startScanner(){

    const progress=document.getElementById("scanProgress");

    const status=document.getElementById("scanStatus");

    if(!progress) return;

    progress.style.width="0%";

    let value=0;

    const messages=[

        "Searching memories...",

        "Finding happiest moments...",

        "Checking future dreams...",

        "Almost ready...",

        "Future found ❤️"

    ];

    let msg=0;

    const timer=setInterval(()=>{

        value++;

        progress.style.width=value+"%";

        if(value%20===0){

            if(status){

                status.innerHTML=messages[msg];

            }

            msg++;

        }

        if(value>=100){

            clearInterval(timer);

            setTimeout(()=>{

                nextScene("memories");

            },1200);

        }

    },45);

}



/* ==========================================
Background Music
========================================== */

let bgMusic;

function setupMusic(){

    bgMusic=document.getElementById("bgMusic");

    if(!bgMusic) return;

    bgMusic.volume=0.25;

    document.body.addEventListener("click",()=>{

        bgMusic.play().catch(()=>{});

    },{once:true});

}



/* ==========================================
Fade Utilities
========================================== */

function fadeIn(element){

    element.style.opacity=0;

    element.style.display="block";

    let op=0;

    const timer=setInterval(()=>{

        op+=0.05;

        element.style.opacity=op;

        if(op>=1){

            clearInterval(timer);

        }

    },20);

}

function fadeOut(element){

    let op=1;

    const timer=setInterval(()=>{

        op-=0.05;

        element.style.opacity=op;

        if(op<=0){

            clearInterval(timer);

            element.style.display="none";

        }

    },20);

}



/* ==========================================
Helper
========================================== */

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

console.log("Birthday Website Part 1 Loaded ❤️");
