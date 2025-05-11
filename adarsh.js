function page1(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-25,
    opacity:0,
    duration:0.5,
    delay:0.4,
    stagger:0.3,
},"-=0.4")

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.2,
})

tl.from(".center-part1 button",{
    // x:-100,
    opacity:0,
    duration:0.5,
})

tl.from(".center-part2 img",{
    x:100,
    opacity:0,
    duration:0.5,
},"-=1")

tl.from(".section1bottom img",{
    y:100,
    opacity:0,
    duration:0.4,
    stagger:0.13
},"-=0.6")
}

page1()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2,
    }
})


tl2.from(".servise",{
    x:-100,
    opacity:0,
    duration:0.2,
})

tl2.from(".elem.line1.left",{
    x:-200,
    duration:0.6,
    opacity:0,
},"yoo")

tl2.from(".elem.line1.right",{
    x:200,
    duration:0.6,
    opacity:0,
},"yoo")

tl2.from(".elem.line2.left",{
    x:-200,
    duration:0.6,
    opacity:0,
},"ada")

tl2.from(".elem.line2.right",{
    x:200,
    duration:0.8,
    opacity:0,
},"ada")

