function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();


var clutter = '';

document.querySelector("#page2 h1").textContent.split(' ').forEach(dets => {
    clutter += `<span> ${dets}</span>`;

    document.querySelector("#page2 h1").innerHTML = clutter;
});

gsap.to("#page2 h1 span",{
    color: "#fff",
    scrollTrigger: {
        trigger: "#page2 h1 ",
        scroller: "#main",
        start: "-50% bottom",
        end: "10% top",
        // markers: true,
        scrub: 0.5
    },
    stagger:0.2
})




function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./content/bulding_frames/frames00007.png
  ./content/bulding_frames/frames00010.png
  ./content/bulding_frames/frames00013.png
  ./content/bulding_frames/frames00016.png
  ./content/bulding_frames/frames00019.png
  ./content/bulding_frames/frames00022.png
  ./content/bulding_frames/frames00025.png
  ./content/bulding_frames/frames00028.png
  ./content/bulding_frames/frames00031.png
  ./content/bulding_frames/frames00034.png
  ./content/bulding_frames/frames00037.png
  ./content/bulding_frames/frames00040.png
  ./content/bulding_frames/frames00043.png
  ./content/bulding_frames/frames00046.png
  ./content/bulding_frames/frames00049.png
  ./content/bulding_frames/frames00052.png
  ./content/bulding_frames/frames00055.png
  ./content/bulding_frames/frames00058.png
  ./content/bulding_frames/frames00061.png
  ./content/bulding_frames/frames00064.png
  ./content/bulding_frames/frames00067.png
  ./content/bulding_frames/frames00070.png
  ./content/bulding_frames/frames00073.png
  ./content/bulding_frames/frames00076.png
  ./content/bulding_frames/frames00079.png
  ./content/bulding_frames/frames00082.png
  ./content/bulding_frames/frames00085.png
  ./content/bulding_frames/frames00088.png
  ./content/bulding_frames/frames00091.png
  ./content/bulding_frames/frames00094.png
  ./content/bulding_frames/frames00097.png
  ./content/bulding_frames/frames00100.png
  ./content/bulding_frames/frames00103.png
  ./content/bulding_frames/frames00106.png
  ./content/bulding_frames/frames00109.png
  ./content/bulding_frames/frames00112.png
  ./content/bulding_frames/frames00115.png
  ./content/bulding_frames/frames00118.png
  ./content/bulding_frames/frames00121.png
  ./content/bulding_frames/frames00124.png
  ./content/bulding_frames/frames00127.png
  ./content/bulding_frames/frames00130.png
  ./content/bulding_frames/frames00133.png
  ./content/bulding_frames/frames00136.png
  ./content/bulding_frames/frames00139.png
  ./content/bulding_frames/frames00142.png
  ./content/bulding_frames/frames00145.png
  ./content/bulding_frames/frames00148.png
  ./content/bulding_frames/frames00151.png
  ./content/bulding_frames/frames00154.png
  ./content/bulding_frames/frames00157.png
  ./content/bulding_frames/frames00160.png
  ./content/bulding_frames/frames00163.png
  ./content/bulding_frames/frames00166.png
  ./content/bulding_frames/frames00169.png
  ./content/bulding_frames/frames00172.png
  ./content/bulding_frames/frames00175.png
  ./content/bulding_frames/frames00178.png
  ./content/bulding_frames/frames00181.png
  ./content/bulding_frames/frames00184.png
  ./content/bulding_frames/frames00187.png
  ./content/bulding_frames/frames00190.png
  ./content/bulding_frames/frames00193.png
  ./content/bulding_frames/frames00196.png
  ./content/bulding_frames/frames00199.png
  ./content/bulding_frames/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()



var page4_clutter = '';

document.querySelector("#page4 #page4_text h1").textContent.split(' ').forEach(dets => {
  page4_clutter += `<span> ${dets} </span>`;

  document.querySelector("#page4 #page4_text h1").innerHTML = page4_clutter;
})


gsap.to("#page4_text h1 span",{
  color: "#fff",
  scrollTrigger: {
    trigger: "#page4_text h1 span",
    scroller: "#main",
    start: "top bottom",
    end: "bottom 50%",
    // markers: true,
    scrub: 0.2
  },
  stagger: 0.5

})


function canvas_2(){
    const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});


function files(index) {
  var data = `
  
  ./content/building_2_frames/bridges00001.png 
  ./content/building_2_frames/bridges00004.png 
  ./content/building_2_frames/bridges00007.png 
  ./content/building_2_frames/bridges00010.png 
  ./content/building_2_frames/bridges00013.png 
  ./content/building_2_frames/bridges00016.png 
  ./content/building_2_frames/bridges00019.png 
  ./content/building_2_frames/bridges00022.png 
  ./content/building_2_frames/bridges00025.png 
  ./content/building_2_frames/bridges00028.png 
  ./content/building_2_frames/bridges00031.png 
  ./content/building_2_frames/bridges00034.png 
  ./content/building_2_frames/bridges00037.png 
  ./content/building_2_frames/bridges00040.png 
  ./content/building_2_frames/bridges00043.png 
  ./content/building_2_frames/bridges00046.png 
  ./content/building_2_frames/bridges00049.png 
  ./content/building_2_frames/bridges00052.png 
  ./content/building_2_frames/bridges00055.png 
  ./content/building_2_frames/bridges00058.png 
  ./content/building_2_frames/bridges00061.png 
  ./content/building_2_frames/bridges00064.png 
  ./content/building_2_frames/bridges00067.png 
  ./content/building_2_frames/bridges00070.png 
  ./content/building_2_frames/bridges00073.png 
  ./content/building_2_frames/bridges00076.png 
  ./content/building_2_frames/bridges00079.png 
  ./content/building_2_frames/bridges00082.png 
  ./content/building_2_frames/bridges00085.png 
  ./content/building_2_frames/bridges00088.png 
  ./content/building_2_frames/bridges00091.png 
  ./content/building_2_frames/bridges00094.png 
  ./content/building_2_frames/bridges00097.png 
  ./content/building_2_frames/bridges00100.png 
  ./content/building_2_frames/bridges00103.png 
  ./content/building_2_frames/bridges00106.png 
  ./content/building_2_frames/bridges00109.png 
  ./content/building_2_frames/bridges00112.png 
  ./content/building_2_frames/bridges00115.png 
  ./content/building_2_frames/bridges00118.png 
  ./content/building_2_frames/bridges00121.png 
  ./content/building_2_frames/bridges00124.png 
  ./content/building_2_frames/bridges00127.png 
  ./content/building_2_frames/bridges00130.png 
  ./content/building_2_frames/bridges00133.png 
  ./content/building_2_frames/bridges00136.png 
  ./content/building_2_frames/bridges00139.png 
  ./content/building_2_frames/bridges00142.png 
  ./content/building_2_frames/bridges00145.png 
  ./content/building_2_frames/bridges00148.png 
  ./content/building_2_frames/bridges00151.png 
  ./content/building_2_frames/bridges00154.png 
  ./content/building_2_frames/bridges00157.png 
  ./content/building_2_frames/bridges00160.png 
  ./content/building_2_frames/bridges00163.png
  ./content/building_2_frames/bridges00164.png
  ./content/building_2_frames/bridges00164.png

 `;
  return data.split("\n")[index];
}

const frameCount = 57;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas_2()


page6_text_clutter = '';

document.querySelector("#page6_text h1").textContent.split(" ").forEach(dets => {
  page6_text_clutter += `<span> ${dets} </span>`;

  document.querySelector("#page6_text h1").innerHTML = page6_text_clutter;
})


gsap.to("#page6_text h1 span",{
  color: "#fff",
  scrollTrigger: {

    trigger: "#page6_text h1 span",
    scroller: "#main",
    start: "top bottom",
    end: "bottom 50%",
    // markers: true,
    scrub: 0.5
  },
  stagger: 0.3
})


function canvas_3(){
    const canvas = document.querySelector("#page6 canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});


function files(index) {
  var data = `
  
  https://thisismagma.com/assets/home/lore/seq/1.webp?2
  https://thisismagma.com/assets/home/lore/seq/2.webp?2
  https://thisismagma.com/assets/home/lore/seq/3.webp?2
  https://thisismagma.com/assets/home/lore/seq/4.webp?2
  https://thisismagma.com/assets/home/lore/seq/5.webp?2
  https://thisismagma.com/assets/home/lore/seq/6.webp?2
  https://thisismagma.com/assets/home/lore/seq/7.webp?2
  https://thisismagma.com/assets/home/lore/seq/8.webp?2
  https://thisismagma.com/assets/home/lore/seq/9.webp?2
  https://thisismagma.com/assets/home/lore/seq/10.webp?2
  https://thisismagma.com/assets/home/lore/seq/11.webp?2
  https://thisismagma.com/assets/home/lore/seq/12.webp?2
  https://thisismagma.com/assets/home/lore/seq/13.webp?2
  https://thisismagma.com/assets/home/lore/seq/14.webp?2
  https://thisismagma.com/assets/home/lore/seq/15.webp?2
  https://thisismagma.com/assets/home/lore/seq/16.webp?2
  https://thisismagma.com/assets/home/lore/seq/17.webp?2
  https://thisismagma.com/assets/home/lore/seq/18.webp?2
  https://thisismagma.com/assets/home/lore/seq/19.webp?2
  https://thisismagma.com/assets/home/lore/seq/20.webp?2
  https://thisismagma.com/assets/home/lore/seq/21.webp?2
  https://thisismagma.com/assets/home/lore/seq/22.webp?2
  https://thisismagma.com/assets/home/lore/seq/23.webp?2
  https://thisismagma.com/assets/home/lore/seq/24.webp?2
  https://thisismagma.com/assets/home/lore/seq/25.webp?2
  https://thisismagma.com/assets/home/lore/seq/26.webp?2
  https://thisismagma.com/assets/home/lore/seq/27.webp?2
  https://thisismagma.com/assets/home/lore/seq/28.webp?2
  https://thisismagma.com/assets/home/lore/seq/29.webp?2
  https://thisismagma.com/assets/home/lore/seq/30.webp?2
  https://thisismagma.com/assets/home/lore/seq/31.webp?2
  https://thisismagma.com/assets/home/lore/seq/32.webp?2
  https://thisismagma.com/assets/home/lore/seq/33.webp?2
  https://thisismagma.com/assets/home/lore/seq/34.webp?2
  https://thisismagma.com/assets/home/lore/seq/35.webp?2
  https://thisismagma.com/assets/home/lore/seq/36.webp?2
  https://thisismagma.com/assets/home/lore/seq/37.webp?2
  https://thisismagma.com/assets/home/lore/seq/38.webp?2
  https://thisismagma.com/assets/home/lore/seq/39.webp?2
  https://thisismagma.com/assets/home/lore/seq/40.webp?2
  https://thisismagma.com/assets/home/lore/seq/41.webp?2
  https://thisismagma.com/assets/home/lore/seq/42.webp?2
  https://thisismagma.com/assets/home/lore/seq/43.webp?2
  https://thisismagma.com/assets/home/lore/seq/44.webp?2
  https://thisismagma.com/assets/home/lore/seq/45.webp?2
  https://thisismagma.com/assets/home/lore/seq/46.webp?2
  https://thisismagma.com/assets/home/lore/seq/47.webp?2
  https://thisismagma.com/assets/home/lore/seq/48.webp?2
  https://thisismagma.com/assets/home/lore/seq/49.webp?2
  https://thisismagma.com/assets/home/lore/seq/50.webp?2
  https://thisismagma.com/assets/home/lore/seq/51.webp?2
  https://thisismagma.com/assets/home/lore/seq/52.webp?2
  https://thisismagma.com/assets/home/lore/seq/53.webp?2
  https://thisismagma.com/assets/home/lore/seq/54.webp?2
  https://thisismagma.com/assets/home/lore/seq/55.webp?2
  https://thisismagma.com/assets/home/lore/seq/56.webp?2
  https://thisismagma.com/assets/home/lore/seq/57.webp?2
  https://thisismagma.com/assets/home/lore/seq/58.webp?2
  https://thisismagma.com/assets/home/lore/seq/59.webp?2
  https://thisismagma.com/assets/home/lore/seq/60.webp?2
  https://thisismagma.com/assets/home/lore/seq/61.webp?2
  https://thisismagma.com/assets/home/lore/seq/62.webp?2
  https://thisismagma.com/assets/home/lore/seq/63.webp?2
  https://thisismagma.com/assets/home/lore/seq/64.webp?2
  https://thisismagma.com/assets/home/lore/seq/65.webp?2
  https://thisismagma.com/assets/home/lore/seq/66.webp?2
  https://thisismagma.com/assets/home/lore/seq/67.webp?2
  https://thisismagma.com/assets/home/lore/seq/68.webp?2
  https://thisismagma.com/assets/home/lore/seq/69.webp?2
  https://thisismagma.com/assets/home/lore/seq/70.webp?2
  https://thisismagma.com/assets/home/lore/seq/71.webp?2
  https://thisismagma.com/assets/home/lore/seq/72.webp?2
  https://thisismagma.com/assets/home/lore/seq/73.webp?2
  https://thisismagma.com/assets/home/lore/seq/74.webp?2
  https://thisismagma.com/assets/home/lore/seq/75.webp?2
  https://thisismagma.com/assets/home/lore/seq/76.webp?2
  https://thisismagma.com/assets/home/lore/seq/77.webp?2
  https://thisismagma.com/assets/home/lore/seq/78.webp?2
  https://thisismagma.com/assets/home/lore/seq/79.webp?2
  https://thisismagma.com/assets/home/lore/seq/80.webp?2
  https://thisismagma.com/assets/home/lore/seq/81.webp?2
  https://thisismagma.com/assets/home/lore/seq/82.webp?2
  https://thisismagma.com/assets/home/lore/seq/83.webp?2
  https://thisismagma.com/assets/home/lore/seq/84.webp?2
  https://thisismagma.com/assets/home/lore/seq/85.webp?2
  https://thisismagma.com/assets/home/lore/seq/86.webp?2
  https://thisismagma.com/assets/home/lore/seq/87.webp?2
  https://thisismagma.com/assets/home/lore/seq/88.webp?2
  https://thisismagma.com/assets/home/lore/seq/89.webp?2
  https://thisismagma.com/assets/home/lore/seq/90.webp?2
  https://thisismagma.com/assets/home/lore/seq/91.webp?2
  https://thisismagma.com/assets/home/lore/seq/92.webp?2
  https://thisismagma.com/assets/home/lore/seq/93.webp?2
  https://thisismagma.com/assets/home/lore/seq/94.webp?2
  https://thisismagma.com/assets/home/lore/seq/95.webp?2
  https://thisismagma.com/assets/home/lore/seq/96.webp?2
  https://thisismagma.com/assets/home/lore/seq/97.webp?2
  https://thisismagma.com/assets/home/lore/seq/98.webp?2
  https://thisismagma.com/assets/home/lore/seq/99.webp?2
  https://thisismagma.com/assets/home/lore/seq/100.webp?2
  https://thisismagma.com/assets/home/lore/seq/101.webp?2
  https://thisismagma.com/assets/home/lore/seq/102.webp?2
  https://thisismagma.com/assets/home/lore/seq/103.webp?2
  https://thisismagma.com/assets/home/lore/seq/104.webp?2
  https://thisismagma.com/assets/home/lore/seq/105.webp?2
  https://thisismagma.com/assets/home/lore/seq/106.webp?2
  https://thisismagma.com/assets/home/lore/seq/107.webp?2
  https://thisismagma.com/assets/home/lore/seq/108.webp?2
  https://thisismagma.com/assets/home/lore/seq/109.webp?2
  https://thisismagma.com/assets/home/lore/seq/110.webp?2
  https://thisismagma.com/assets/home/lore/seq/111.webp?2
  https://thisismagma.com/assets/home/lore/seq/112.webp?2
  https://thisismagma.com/assets/home/lore/seq/113.webp?2
  https://thisismagma.com/assets/home/lore/seq/114.webp?2
  https://thisismagma.com/assets/home/lore/seq/115.webp?2
  https://thisismagma.com/assets/home/lore/seq/116.webp?2
  https://thisismagma.com/assets/home/lore/seq/117.webp?2
  https://thisismagma.com/assets/home/lore/seq/118.webp?2
  https://thisismagma.com/assets/home/lore/seq/119.webp?2
  https://thisismagma.com/assets/home/lore/seq/120.webp?2
  https://thisismagma.com/assets/home/lore/seq/121.webp?2
  https://thisismagma.com/assets/home/lore/seq/122.webp?2
  https://thisismagma.com/assets/home/lore/seq/123.webp?2
  https://thisismagma.com/assets/home/lore/seq/124.webp?2
  https://thisismagma.com/assets/home/lore/seq/125.webp?2
  https://thisismagma.com/assets/home/lore/seq/126.webp?2
  https://thisismagma.com/assets/home/lore/seq/127.webp?2
  https://thisismagma.com/assets/home/lore/seq/128.webp?2
  https://thisismagma.com/assets/home/lore/seq/129.webp?2
  https://thisismagma.com/assets/home/lore/seq/130.webp?2
  https://thisismagma.com/assets/home/lore/seq/131.webp?2
  https://thisismagma.com/assets/home/lore/seq/132.webp?2
  https://thisismagma.com/assets/home/lore/seq/133.webp?2
  https://thisismagma.com/assets/home/lore/seq/134.webp?2
  https://thisismagma.com/assets/home/lore/seq/135.webp?2
  https://thisismagma.com/assets/home/lore/seq/136.webp?2
  ./content/pages_last_img.png

 `;
  return data.split("\n")[index];
}

const frameCount = 137;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page6`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page6",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `400% top`,
});
}
canvas_3()




// gsap.to("#page6_cir",{
//   scale: 4,
//   scrollTrigger: {
//     trigger: "#page6",
//     scroller: "#main",
//     start: "top top",
//     end: "bottom top",
//     markers: true,
//     scrub: 0.5
//   },
//   stagger: 0.2
// })


gsap.from('#page6_cir',{
  scale: 0.2,
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "top center",
    end: "250% top",
    // markers: true,
    scrub: 0.5
  },
  stagger: 0.2
})


// gsap.to('#page6_cir',{
//   scale: 0.9,
//   scrollTrigger: {
//     trigger: "#page7",
//     scroller: '#main',
//     start: "top bottom",
//     end: "top 70%",
//     markers: true,
//     scrub: 0.5
//   },
//   stagger: 0.2
// })


gsap.from('#page7 video',{
  opacity: 0,
  scale: 2,
  scrollTrigger: {
    trigger: "#page7 video",
    scroller: "#main",
    start: "top top",
    end: "50% top",
    // markers: true,
    scrub: 0.5

  },
  stagger: 0.1
})


ScrollTrigger.create({
  trigger: "#page7",
  pin: true,
  scroller: "#main",
  start: "top top",
  end: "100% top"
})



gsap.to("#page7_text h1",{
  transform : "rotate(0deg)",
  scrollTrigger: {
    trigger: "#page7 video",
    scroller: "#main",
    start: "50% top",
    end: "70% top",
    // markers: true,
    scrub: 0.5
  }
})

gsap.from("#page7_text button",{
  opacity: 0,
  transform: "translateY(100%)",
  scrollTrigger: {
    trigger: "#page7 video",
    scroller: "#main",
    start: "50% top",
    end: "70% top",
    // markers: true,
    scrub: 0.5
  }
})


// function canvas_roadmap(){
//     const canvas = document.querySelector("#page10_content_right canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//   https://thisismagma.com/assets/home/roadmap/seq/1.webp
//   https://thisismagma.com/assets/home/roadmap/seq/2.webp
//   https://thisismagma.com/assets/home/roadmap/seq/3.webp
//   https://thisismagma.com/assets/home/roadmap/seq/4.webp
//   https://thisismagma.com/assets/home/roadmap/seq/5.webp
//   https://thisismagma.com/assets/home/roadmap/seq/6.webp
//   https://thisismagma.com/assets/home/roadmap/seq/7.webp
//   https://thisismagma.com/assets/home/roadmap/seq/8.webp
//   https://thisismagma.com/assets/home/roadmap/seq/9.webp
//   https://thisismagma.com/assets/home/roadmap/seq/10.webp
//   https://thisismagma.com/assets/home/roadmap/seq/11.webp
//   https://thisismagma.com/assets/home/roadmap/seq/12.webp
//   https://thisismagma.com/assets/home/roadmap/seq/13.webp
//   https://thisismagma.com/assets/home/roadmap/seq/14.webp
//   https://thisismagma.com/assets/home/roadmap/seq/15.webp
//   https://thisismagma.com/assets/home/roadmap/seq/16.webp
//   https://thisismagma.com/assets/home/roadmap/seq/17.webp
//   https://thisismagma.com/assets/home/roadmap/seq/18.webp
//   https://thisismagma.com/assets/home/roadmap/seq/19.webp
//   https://thisismagma.com/assets/home/roadmap/seq/20.webp
//   https://thisismagma.com/assets/home/roadmap/seq/21.webp
//   https://thisismagma.com/assets/home/roadmap/seq/22.webp
//   https://thisismagma.com/assets/home/roadmap/seq/23.webp
//   https://thisismagma.com/assets/home/roadmap/seq/24.webp
//   https://thisismagma.com/assets/home/roadmap/seq/25.webp
//   https://thisismagma.com/assets/home/roadmap/seq/26.webp
//   https://thisismagma.com/assets/home/roadmap/seq/27.webp
//   https://thisismagma.com/assets/home/roadmap/seq/28.webp
//   https://thisismagma.com/assets/home/roadmap/seq/29.webp
//   https://thisismagma.com/assets/home/roadmap/seq/30.webp
//   https://thisismagma.com/assets/home/roadmap/seq/31.webp
//   https://thisismagma.com/assets/home/roadmap/seq/32.webp
//   https://thisismagma.com/assets/home/roadmap/seq/33.webp
//   https://thisismagma.com/assets/home/roadmap/seq/34.webp
//   https://thisismagma.com/assets/home/roadmap/seq/35.webp
//   https://thisismagma.com/assets/home/roadmap/seq/36.webp
//   https://thisismagma.com/assets/home/roadmap/seq/37.webp
//   https://thisismagma.com/assets/home/roadmap/seq/38.webp
//   https://thisismagma.com/assets/home/roadmap/seq/39.webp
//   https://thisismagma.com/assets/home/roadmap/seq/40.webp
//   https://thisismagma.com/assets/home/roadmap/seq/41.webp
//   https://thisismagma.com/assets/home/roadmap/seq/42.webp
//   https://thisismagma.com/assets/home/roadmap/seq/43.webp
//   https://thisismagma.com/assets/home/roadmap/seq/44.webp
//   https://thisismagma.com/assets/home/roadmap/seq/45.webp
//   https://thisismagma.com/assets/home/roadmap/seq/46.webp
//   https://thisismagma.com/assets/home/roadmap/seq/47.webp
//   https://thisismagma.com/assets/home/roadmap/seq/48.webp
//   https://thisismagma.com/assets/home/roadmap/seq/49.webp
//   https://thisismagma.com/assets/home/roadmap/seq/50.webp
//   https://thisismagma.com/assets/home/roadmap/seq/51.webp
//   https://thisismagma.com/assets/home/roadmap/seq/52.webp
//   https://thisismagma.com/assets/home/roadmap/seq/53.webp
//   https://thisismagma.com/assets/home/roadmap/seq/54.webp
//   https://thisismagma.com/assets/home/roadmap/seq/55.webp
//   https://thisismagma.com/assets/home/roadmap/seq/56.webp
//   https://thisismagma.com/assets/home/roadmap/seq/57.webp
//   https://thisismagma.com/assets/home/roadmap/seq/58.webp
//   https://thisismagma.com/assets/home/roadmap/seq/59.webp
//   https://thisismagma.com/assets/home/roadmap/seq/60.webp
//   https://thisismagma.com/assets/home/roadmap/seq/61.webp
//   https://thisismagma.com/assets/home/roadmap/seq/62.webp
//   https://thisismagma.com/assets/home/roadmap/seq/63.webp
//   https://thisismagma.com/assets/home/roadmap/seq/64.webp
//   https://thisismagma.com/assets/home/roadmap/seq/65.webp
//   https://thisismagma.com/assets/home/roadmap/seq/66.webp
//   https://thisismagma.com/assets/home/roadmap/seq/67.webp
//   https://thisismagma.com/assets/home/roadmap/seq/68.webp
//   https://thisismagma.com/assets/home/roadmap/seq/69.webp
//   https://thisismagma.com/assets/home/roadmap/seq/70.webp
//   https://thisismagma.com/assets/home/roadmap/seq/71.webp
//   https://thisismagma.com/assets/home/roadmap/seq/72.webp
//   https://thisismagma.com/assets/home/roadmap/seq/73.webp
//   https://thisismagma.com/assets/home/roadmap/seq/74.webp
//   https://thisismagma.com/assets/home/roadmap/seq/75.webp
//  `;
//   return data.split("\n")[index];
// }

// const frameCount = 75;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub: .5,
//     trigger: `#page10_content`,
//     start: `-90vh top`,
//     end: `250% top`,
//     markers: true,
//     scroller: `#main`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//   );
// }
// ScrollTrigger.create({

//   trigger: "#page10_content",
//   pin: true,
//   scroller: `#main`,
//   start: `-90vh top`,
//   end: `250% top`,
// });
// }
// canvas_roadmap()
