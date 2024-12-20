
var t1= gsap.timeline();
var t2= gsap.timeline();
var t3= gsap.timeline({
    
    scrollTrigger: {
        trigger: ".section-brands",
        start: "top 50%",
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
  opacity: 0,

}).from("nav button",
    {
        opacity: 0,
        duration: .4,
        x:100
        
    }
)



t2.from(".center h1",{
    opacity: 0,
    duration: .8,
    y:100,

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
    duration: 1,
    scale:.3
})


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