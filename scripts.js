const circle = document.querySelector('.circle');

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let isHovering = false; // Track if the mouse is hovering over the button

const speed = 0.1;

function updateCirclePosition() {
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;
    
    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;
    
    requestAnimationFrame(updateCirclePosition);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

updateCirclePosition();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        isHovering = true;
        shrinkAndFadeCircle();
    });
    button.addEventListener('mouseleave', () => {
        isHovering = false;
        expandAndAppearCircle();
    });
});

function shrinkAndFadeCircle() {
    const shrinkFadeInterval = setInterval(() => {
        let diameter = parseFloat(circle.style.width || 50);
        let opacity = parseFloat(circle.style.opacity || 1);
        
        diameter -= 1; // Decrease the size
        opacity -= 0.05; // Decrease opacity
        
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.opacity = opacity;
        
        if (diameter <= 0 || opacity <= 0) {
            clearInterval(shrinkFadeInterval);
            circle.style.display = 'none';
        }
    }, 10); // Decrease the interval for faster change
}

function expandAndAppearCircle() {
    circle.style.display = 'block';
    circle.style.opacity = '1';
    const expandInterval = setInterval(() => {
        let diameter = parseFloat(circle.style.width || 0);
        diameter += 1; // Increase the size
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        
        if (diameter >= 50) {
            clearInterval(expandInterval);
        }
    }, 10); // Decrease the interval for faster change
}


// Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
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
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
