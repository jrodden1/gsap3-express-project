//https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com
// my very basic animation from memory (it works!)
let tl = gsap.timeline()
   tl.from("#demo", {opacity: 0, duration: 1})
     .from("h1", {x:80, opacity: 0})
     .from("h2", {x:-80, opacity: 0})
     .from("p", {y:30, opacity: 0})
     .from("button", {y:30, opacity:0})
     .from("#items > g", {scale: 0, opacity: 0, transformOrigin: "50% 50%", stagger: 0.1})
     // transformOrigin allows you to scale from the center anchor point vs the default of x:0, y:0