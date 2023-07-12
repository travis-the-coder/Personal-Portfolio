// // Goal is to get the 

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".from-left");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px"
  };
    
  const appearOnScroll = new IntersectionObserver
  (function(entries, appearOnScroll) {


    entries.forEach(entry => {

      
        if(entry.isIntersecting) {

                entry.target.classList.add('appear');
                //appearOnScroll.unobserve(entry.target);
            }
    }) 

  },appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);

});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);

});

