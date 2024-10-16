document.addEventListener('mousemove' , function(e) {
    Object.assign(document.documentElement, {
        style: `
        --moveX: ${(e.clientX - window.innerWidth/2) *  -.005}deg;
        --moveY:${(e.clientY -  window.innerHeight/2) * .01}deg;
        `
    })
})  