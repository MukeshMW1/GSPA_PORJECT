function firstPageAnimation() {
    var globe = document.querySelector(" #globe");
    var t1= gsap.timeline({ delay: .4,});
    var t2= gsap.timeline({ delay: .4,});
    var t3= gsap.timeline({
       
        scrollTrigger: {
            trigger: ".section-brands",
            start: "top 60%",
            end: "top",
            scrub: 1,
            markers: true,
            }
    });
    t1.from("nav",
        {
            opacity: 0,
            duration: .9,
          
        }
    ).from("nav li",{
        y:-100,
      duration: .4,
      stagger: 0.3,
      ease:"back.inOut(2.7)",
      opacity: 0,
    
    }).from("nav button",
        {
            opacity: 0,
            duration: .4,
            x:100
            
        }
    )
    
    // t2.from(".center h1,.center p,.center button",{
    //     opacity: 0,
    //     duration: .8,
    //     y:100,
    
    //  })
    
    
    t2.from(".center h1",{
        opacity: 0,
        duration: .8,
        x:-100,
    
    }).from(".center p",{
        opacity: 0,
        duration: .4,
        y:100,
    
    }).from(".center button",{
        opacity: 0,
        duration: .4,
        y:100,
    }).from(".center img",{
        opacity: 0,
        duration: .6,
        scale:.3,
    },"-=1")
    
    
    t3.from(".section-brands img",{
        opacity: 0,
        scale:2,
        duration: .8,
        y:100,
        stagger: .2
    })
    // .from(".section-brands h2",{
    //     opacity: 0,
    //     duration: .4,
    //     y:100,
    // }).from(".section-brands p",{
    //     opacity: 0,
    //     duration: .4,
    //     y:100,
    // }).from(".section-brands button",{
    //     opacity: 0,
    //     duration: .4,
    //     y:100,
    
    // })
    
    
    globe.addEventListener("mouseenter", function(){
       gsap.to(globe,{
           rotate: 180,
           duration: .7,
           scale:.6
       })
    })
    globe.addEventListener("mouseleave", function(){
       gsap.to(globe,{
           rotate: 0,
           duration: .7,
           scale:1
       })
    })
}

firstPageAnimation();



let tj = gsap.timeline({
    scrollTrigger: {
        trigger: ".services h3",
        start: "top 60%",
        end: "top",
        scrub: 1,
        markers: true,
        }
});
tj.from(".services h3",{
    opacity:0,
    duration: .6,
    scale:.2,
    x:-100,
   
},"anime").from(".services p",{
    x:100,
    opacity:0,
    duration: .3,
    scale:.2,
},"anime")