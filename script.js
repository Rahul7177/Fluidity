function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = (dets.x) +"px";
    crsr.style.top = (dets.y) +"px";
});


// gsap.from(".page1 h1,.page1 h2", {
//     y: 10,
//     rotate: -10,
//     opacity: 0,
//     // delay: 0.3,
//     duration: 0.7
// })


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 30%",
        end:"top 0%",
        scrub:3
    }
})

tl.to(".page1 h1",
{
    x:"-5rem",
    // alignSelf:"center",
    duration:1,
},"anim")

tl.to(".page1 h2",
{
    x:"5rem",
    duration:1,
},"anim")

tl.to(".page1 video",{
    width: "90%",
},"anim")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top 55%",
        scrub: 3,
        duration:1
    }
})

tl2.to(".main", {
    backgroundColor: "#ffff",
    duration:1
})

tl2.to(".page1 video",{
    boxShadow: "0px 0px 20px #0a0a0a"
})

tl2.from(".page2 h1",{
    x:50,
    // scale:1.2,
    duration:1
},"anim2")

tl2.from(".page2-left",{
    x:40,
    color: "#111",
    duration:1
},"anim2")

tl2.from(".page2-right",{
    x:-40,
    color: "#111",
    duration:1
},"anim2")

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 50%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#0f0d0d",
    duration:1.2
})

tl3.to(".page3 h1", {
    color:"#ffff",
    duration:1
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "20vw"
        crsr.style.height = "10vw"
        crsr.style.mixBlendMode = "darken"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "15px"
        crsr.style.height = "  15px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 50%",
        scrub: 3
    }
})

tl4.to(".main", {
    backgroundColor: "#ffff",
    color:"#0f0d0d",
    duration:1.2
})

tl4.to("footer ul li a i", {
    color:"#of0d0d",
})
// tl4.from(".box", {
//     x:-50,
//     duration:1.2,
//     scrub:3
// })

