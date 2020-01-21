//https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com
// my very basic animation from memory (it works!)
let tl = gsap.timeline({
   // you can add default values for every tween inside of this timeline 
   defaults: {
      opacity: 0,
      ease: "back"
   }
})

   // once you add those defaults you can then exclude that information from each tween unless you want to manually override it.
   tl.from("#demo", {duration: 1, ease: "linear"})
     .from("h1", {x:80})
     .from("h2", {x:-80}, "<") // Told this to come in at the same time as the previous tween
     .from("p", {y:30})
     .from("button", {y:30})
     .from("#items > g", {scale: 0, transformOrigin: "50% 50%", stagger: 0.1})
     // transformOrigin allows you to scale from the center anchor point vs the default of x:0, y:0

     
//Uncomment the below line to use GSDevTools once you have a GSAP subscription
//GSDevTools.create()