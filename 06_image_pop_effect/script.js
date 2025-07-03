function throttle(fn, delay) {
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}


const images = [
    "https://plus.unsplash.com/premium_photo-1676977395506-2320c4d80618?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1741850821397-ed0e5d9bc125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",

    "https://plus.unsplash.com/premium_photo-1676977395669-48a8713a7e42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",

    "https://plus.unsplash.com/premium_photo-1674747086860-260c70c1793f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
];

var imageIndex = 0;

const getImage = () => {
    if (imageIndex < images.length){
        
        return images[imageIndex++];
    }
    else {
        imageIndex = 0;
        return images[imageIndex++]
    }
}


document.querySelector('#center').addEventListener('mousemove', throttle((dets) => {
    var div = document.createElement('div');
    
    div.classList.add('imageDiv')
    div.style.top = (dets.clientY - 300) + 'px';
    div.style.left = (dets.clientX - 100) + 'px';
    
    var img = document.createElement('img');
    img.setAttribute('src', getImage());
    div.appendChild(img);
    
    gsap.to(img,{
        y: "-20px",
        ease: Power1,
        delay: 0.2
    })
    gsap.to(img,{
        y: "100%",
        ease: Power2,
        delay: 0.8
    })

    document.querySelector('body').appendChild(div);
    setTimeout(function(){
        div.remove();
    },2000)
}, 200));
        