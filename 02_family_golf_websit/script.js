    var curser = document.querySelector("#curser");
    var curserBlur = document.querySelector("#curser_blur");

    
    document.addEventListener('mousemove', function (dets){
        curser.style.top = dets.y - 10  + "px"
        curser.style.left = dets.x - 10 + "px"
        curserBlur.style.top = dets.y - 250 + "px"
        curserBlur.style.left = dets.x - 250 + "px"
    })

    var navLinks = document.querySelectorAll("#nav h4");



navLinks.forEach(elem => {
    elem.addEventListener('mouseenter',()=>{
        curser.style.scale = 3;
        curser.style.border = "1px solid white";
        curser.style.backgroundColor = "transparent";
    })
        

    elem.addEventListener('mouseleave',()=>{
        curser.style.scale = 1;
        curser.style.border = "0px solid white";
        curser.style.backgroundColor = "#95c11e";
    })
})



//     let mouseX = 0, mouseY = 0;
// let curX = 0, curY = 0;
// let blurX = 0, blurY = 0;

// document.addEventListener('mousemove', function (dets){
//     mouseX = dets.x;
//     mouseY = dets.y;
// });

// function animate() {
//     curX += (mouseX - curX) * 0.08;
//     curY += (mouseY - curY) * 0.08;

//     blurX += (mouseX - 250 - blurX) * 0.04;
//     blurY += (mouseY - 250 - blurY) * 0.04;

//     curser.style.transform = `translate(${curX}px, ${curY}px)`;
//     curserBlur.style.transform = `translate(${blurX}px, ${blurY}px)`;

//     requestAnimationFrame(animate);
// }

// animate();
    
gsap.to("#nav" , {
        backgroundColor: "#000",
        duration: 0.5,
        height: "110px",
        scrollTrigger: {
            trigger: "#nav",
            scroller: "body",
            start: "top -10%",
            end: "top -11%",
            scrub: 1
        }
    })

gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: "#main",
            scroller: "body",
            // markers: true,
            start: "top -30%",
            end: "top -80%",
            scrub: 2
        }
})


gsap.from("#about_us img, #about_us_in",{
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about_us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 1
        
    }
})


gsap.from(".card", {
    scale: 0.8,
    opacity:0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub: 1
    }
})


gsap.from("#colun1",{
    x: "-=50%",
    y: "-=50%",
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 25%",
        scrub: 2
    }
})


gsap.from("#colun2",{
    x: "50%",
    y: "50%",
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 25%",
        scrub: 2
    }
})


gsap.from("#page4 h1" , {
    top: "10px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top 90%",
        scrub: 1
    }
})


var elems = document.querySelectorAll("#page4 #elem");


elems.forEach(elem => {

    elem.addEventListener('mouseenter', function(){
        document.querySelector("#page4 h1").style.webkitTextStroke = "2px #95c11e"
        
    })
    elem.addEventListener('mouseleave', function(){

        document.querySelector("#page4 h1").style.webkitTextStroke = "2px #fff"
    })
})



var hoverEffectItems =  document.querySelectorAll("#logos img , #logos i,#f1 p, #f2 p , #f3 a , #f3 p:nth-child(2)");


hoverEffectItems.forEach(Element => {
    Element.addEventListener('mouseenter',()=>{
        curser.style.scale = 3;
        curser.style.border = "1px solid white";
        curser.style.backgroundColor = "transparent";
    })
        

    Element.addEventListener('mouseleave',()=>{
        curser.style.scale = 1;
        curser.style.border = "0px solid white";
        curser.style.backgroundColor = "#95c11e";
    })
});
