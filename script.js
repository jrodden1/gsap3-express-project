//https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com
// my very basic animation from memory (it works!)
let tl = gsap.timeline({
   // you can add default values for every tween inside of this timeline 
   defaults: {
      opacity: 0,
      ease: "back"
   }
})

const init = () => {
   // once you add those defaults you can then exclude that information from each tween unless you want to manually override it.
   tl.from("#demo", {duration: 1, ease: "linear", autoAlpha:0})
      //The AutoAlpha plugin shown above will toggle visibility and fade opacity;
      //If you tween from an autoAlpha of 0 then visibility will be set to 'inherit' and the opacity will animate from 0 to 1
      //This requires that you set the visibility of your animation to hidden in your CSS first - see the CSS file #demo area
     .from("h1", {x:80, duration: 0.75})
     .from("h2", {x:-80, duration: 0.75}, "<") // Told this to come in at the same time as the previous tween
     .from("p", {y:30}, "-=0.2")
     .from("button", {y:40}, "-=0.4")
     .from("#items > g", {scale: 0, transformOrigin: "50% 50%", stagger: 0.1}, "-=0.4")
     // transformOrigin allows you to scale from the center anchor point vs the default of x:0, y:0
}

window.addEventListener("load", () => init());
//the init function isn't going to run until all the images are loaded as well (better to do this than DOMContentLoaded)

//Uncomment the below line to use GSDevTools once you have a GSAP subscription
//GSDevTools.create()