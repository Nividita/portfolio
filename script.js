document.addEventListener('DOMContentLoaded', () => {
    // Initialize TypewriterJS
    const typewriter = new Typewriter('#typing-text', {
        loop: true, // Loop the typing effect
        delay: 75,  // Speed of typing (in milliseconds)
    });

    // Add typing effect
    typewriter
        .typeString('welcome to my portfolio..')
        .pauseFor(1500)  // Pause before starting to delete
        .deleteAll()  // Delete the text
        .typeString('I am NIVIDITA..')
        .pauseFor(1500)  // Pause before starting to delete
        .deleteAll()  // Delete the text
        .start(); // Start the animation

      // GSAP Animation
    gsap.from('#hero', { opacity: 0, duration: 2, y: 50 });
    
        gsap.from('#about', { opacity: 0, duration: 2, y: 50 });

   gsap.registerPlugin(ScrollTrigger);


    gsap.from("#about-img",{
        scrollTrigger:{
            trigger: "#about-img",
            start: "top 80%",
            end: "top 0%",
            scrub: true,
        },
        scale: 0.5,
        opacity: 0,
        ease: "power3.out",
       duration: 2.8
    });
    //animation  for about typewriter 

    const aboutTypewriter = new Typewriter('.about-content',{
        loop: false,
        delay: 50,
    });
   let hasStartedTyping = false;
    ScrollTrigger.create({
        trigger: '.about-content',
        start: 'top 80%',
        onEnter: () => {
            if(!hasStartedTyping){
                aboutTypewriter
            .typeString('Hi, I’m Nividita, a passionate web developer with a knack for creating dynamic and user-friendly websites.With a background in computer science and a love for learning new technologies, I am always eager to take on new challenges and improve my skills.      💯')
            .pauseFor(2000)
            .start();
            hasStartedTyping = true;
        }
    },
    });

//gsap animation for project1 and project2


const project1 = document.getElementById('project1');
    const project2 = document.getElementById('project2');

// GSAP animation on hover
project1.addEventListener('mouseover', () => {
 gsap.to(project1, { x: -100, duration: 0.5 });
 gsap.to(project2, { x: 100, duration: 0.5 });
});

project1.addEventListener('mouseout', () => {
 gsap.to(project1, { x: 0, duration: 0.5 });
 gsap.to(project2, { x: 0, duration: 0.5 });
});

project2.addEventListener('mouseover', () => {
 gsap.to(project1, { x: 100, duration: 0.5 });
 gsap.to(project2, { x: -100, duration: 0.5 });
});

project2.addEventListener('mouseout', () => {
 gsap.to(project1, { x: 0, duration: 0.5 });
 gsap.to(project2, { x: 0, duration: 0.5 });
});

AOS.init({
    duration: 1000, // Animation duration in milliseconds
    offset: 100,    // Offset from the top of the viewport to start the animation
    easing: 'ease-out', // Easing function
  });


  //Sweet alert
 document.getElementById('view-resume').addEventListener('click',function(){
    Swal.fire({
        title:'Download My Resume',
        text:'Click the button below to download my resume.',
        icon:'info',
        showCancelButton: true,
        confirmButtonText:'Download  Resume',
        cancelButtonText:'Download Resume',
        cancelButtonText:'Cancel',
        confirmButtonColor:'#007BFF',
        cancelButtonColor:'#6c757d',
        preConfirm: () =>{
            window.location.href="https://github.com/Nividita/resume/blob/main/oddresume.pdf", '_blank';
        }
    })

    document.addEventListener('DOMContentLoaded', () => {
        gsap.from('#contact', {
            opacity: 0,
            duration: 2,
            y: 50,
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%',
            }
        });
    });
    
 })
 
 particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 90, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#3CB371" // Particle color
    },
    "shape": {
      "type": "circle", // Shape of the particles
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, // Speed of particle movement
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
    }
  },
  "retina_detect": true
});






});



