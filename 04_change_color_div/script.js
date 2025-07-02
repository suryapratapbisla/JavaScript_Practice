const rect = document.querySelector("#center");

rect.addEventListener('mousemove' , function(event){
    const rectangelLocation = rect.getBoundingClientRect();
    const insideRectangel = event.clientX - rectangelLocation.left
    
    
    if (insideRectangel < (rectangelLocation.width/2)) {
        const redColor = gsap.utils.mapRange(0,(rectangelLocation.width/2),255,0,insideRectangel.toFixed(0));
        const opacity = gsap.utils.mapRange(0,(rectangelLocation.width/2),1,0,insideRectangel.toFixed(0))
        gsap.to(rect,{
            backgroundColor: `rgba(${redColor},0,0,${opacity})`,
            ease: Power4
        })
    }
    else {
        const blueColor = gsap.utils.mapRange(rectangelLocation.width/2,rectangelLocation.width,0,255,insideRectangel.toFixed(0));
        const opacity = gsap.utils.mapRange(rectangelLocation.width/2,rectangelLocation.width,0,1,insideRectangel.toFixed(0));

        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor},${opacity})`,
            ease: Power4
        })
        
    }

    
})


rect.addEventListener('mouseleave', function(){
    gsap.to(rect,{
        backgroundColor: "#fff"
    })
})