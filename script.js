let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");

main.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    expo:"back.out",
   })
})




var menu =document.querySelector(".nav-menu")
var i=0

menu.addEventListener("click",function(){
    if(i==0){
        gsap.to(".click-menu",{
            top:"0vh",
            duration:1,
            expo:"power4"
        })
    }
})
var cross = document.querySelector(".cross");

cross.addEventListener("click",()=>{
    gsap.to(".click-menu",{
        top:"-100vh",
        duration:1,
        expo:"power4"
    })
})

var typed = new Typed('.auto-type', {
    strings: ['MERN STACK DEVELOPER','PROGRAMMER','DESGINER'],
    typeSpeed: 150,
    backSpeed: 100,
    loop:true,
  });


var tl=gsap.timeline()

tl.from(".create",{
    y:50,
    duration:2,
    // delay:1,
    opacity:0
})
tl.to(".create",{
    y:-40,
    duration:1,
    opacity:0
})
tl.from(".animate",{
    y:50,
    duration:2,
    // delay:1,
    opacity:0
})
tl.to(".animate",{
    y:-40,
    duration:1,
    opacity:0
})
tl.from(".show",{
    y:50,
    duration:2,
    // delay:1,
    opacity:0
})
tl.to(".show",{
    y:-40,
    duration:2,
    opacity:0
})
tl.to(".preloader",{
    y:-100,
    opacity:0,
    duration:0.3,
    display:"none"
})


gsap.from(".rounded-video", {
    scrollTrigger: {
        trigger: ".page3",
        scroller:"body", 
        start: "top 50%", 
        end: "top 70%", 
        scrub: 1,
    },
    opacity:0,
    scale:0.5,
    duration:4,
});
gsap.from(".rounded-video1", {
    scrollTrigger: {
        trigger: ".page3 .rounded-video1",
        scroller:"body", 
        start: "top 50% top 50%", 
        end: "top 70%", 
        scrub: 1,
    },
    opacity:0,
    scale:0.5,
    duration:4,
});



gsap.from(".prot h1", {
    scrollTrigger: {
        trigger: ".prot h1",
        scroller:"body", 
        start: "top 50%", 
        end: "top 70%", 
        scrub: 1,
    },
    y:-40,
    duration:1.5,
    opacity:0,
    delay:1,
    stagger:0.3,
});

gsap.from(".ai h1", {
    scrollTrigger: {
        trigger: ".ai h1",
        scroller:"body", 
        start: "top 50%", 
        end: "top 70%", 
        scrub: 1,
    },
    x:40,
    duration:1.5,
    opacity:0,
    delay:1,
    stagger:0.3,
});

gsap.to("#burst-12", {
    rotate: 360,   
    duration: 4,   
    repeat: -1,    
    ease: "linear" 
});

gsap.from(".explore h1", {
    scrollTrigger: {
        trigger: ".explore h1",
        scroller:"body", 
        start: "top 50%", 
        end: "top 70%", 
        scrub: 1,
    },
    x:-40,
    duration:1.5,
    opacity:0,
    delay:1,
    stagger:0.3,
});

let video = document.querySelector(".ludu .rounded-video");
let video1 = document.querySelector(".ludu .rounded-video1");

video.addEventListener("mouseenter", () => {
    cursor.style.height = "50px";
    cursor.style.width = "50px";
    cursor.style.backgroundColor = "black";
});

video.addEventListener("mouseleave", () => {
    cursor.style.height = "10px"; 
    cursor.style.width = "10px"; 
    cursor.style.backgroundColor = "white"; 
});
video1.addEventListener("mouseenter", () => {
    cursor.style.height = "50px";
    cursor.style.width = "50px";
    cursor.style.backgroundColor = "white";
});

video1.addEventListener("mouseleave", () => {
    cursor.style.height = "10px"; 
    cursor.style.width = "10px"; 
    cursor.style.backgroundColor = "white"; 
});
window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY>0){
        gsap.to(".slid1", {
            x: "-100%",
            duration: 2,
            repeat:-1,
            ease:"none",
            yoyo:true
        });
        gsap.to(".slid1 i",{
            rotate:180
        })
    }
    else{
        gsap.to(".slid1", {
            x: "0%",
            duration: 2, 
            repeat:-1,
            ease:"none",
        });
        gsap.to(".slid1 i",{
            rotate:0
        })
    }
})
