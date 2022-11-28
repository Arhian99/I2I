
let about = document.querySelector('#about-nav'),
projects = document.querySelector('#projects'),
contact = document.querySelector('#contact'),
home = document.querySelector('#home'),
menu = document.querySelector('.media-menu');


menu.addEventListener('click', () => {
  if (document.querySelector('.media-menu-cont').id == 'show') {
    document.querySelector('.media-menu-cont').id = '';
  }

  else document.querySelector('.media-menu-cont').id = 'show';
})


let multWords = [
  'Hello, World!', 
  'I\'m Arhian Albis Ramos', 
  'A self-taught web developer who is passionate about solving problems and building things with code. I am currently looking for new opportunities. Take a look around at some of the projects I\'ve built!',
  'PROJECTS', 
  'RESUME', 
  'ABOUT ME', 
  'PROJECTS', 
  'CONTACT'
];

let scrollAppear = setInterval(() => {
  document.querySelector('.scroll').style.display = 'block';
  clearInterval(scrollAppear);
}, 5500);



function typingAnimationHome(word) {
    let letter = 0,
    speed=150;

    if (this == document.querySelector('#description')) {
        speed = 20;
    }

    this.classList.add('word');
    
    let interval = setInterval(() => {
        if(letter>word.length) {
            letter=0;
            clearInterval(interval);
            if (this !== document.querySelector('#name')) {
                this.classList.remove('word');
            }
            return
        }

        part = word.substr(0, letter);
        this.innerHTML=`${part}`;
        letter++
    }, speed)
}

function typingAnimationHandle(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting /* && entry.intersectionRatio >= 0.5 */) {
      let letter = 0,
      part,
      animatedText,
      speed = 150,
      element;

      function animate() {
        let interval = setInterval( () => {
          if (letter > this.length) {
            letter = 0;
            clearInterval(interval);
            return
          }
          part = this.substr(0, letter);
          element.innerHTML = `${part}`;
          letter++;
        }, speed)
      }
  
      if (entry.target == about) {
        document.querySelector('.about-content').classList.add('slideFromBottom');
        document.querySelector('.about-content').style.opacity = '1';

        document.querySelector('.about-img-wrapper').classList.add('slideFromLeft');
        document.querySelector('.about-img-wrapper').id = 'active';
        document.querySelector('.about-content p').classList.add('slideFromRight');
        document.querySelector('.about-content p').id = 'active';

        animatedText = 'ABOUT ME';
        element = document.querySelector('.about-title');
        element.classList.add('word');
        animate.call(animatedText);

        animatedTextObserver.unobserve(about);
      }

      else if (entry.target == projects) {
        document.querySelector('.projects-cont').classList.add('slideFromBottom');
        document.querySelector('.projects-cont').style.opacity = '1';

        document.querySelector('.projects-btns-cont').classList.add('slideFromLeft');
        document.querySelector('.projects-btns-cont').id = 'active';
        document.querySelector('.project-info-cont').classList.add('slideFromRight');
        document.querySelector('.project-info-cont').id = 'active';


        animatedText = 'PROJECTS';
        element = document.querySelector('.projects-title');
        element.classList.add('word');
        animate.call(animatedText);

        animatedTextObserver.unobserve(projects);
      }

      else if (entry.target == contact) {
        document.querySelector('.contact-content').classList.add('slideFromBottom');
        document.querySelector('.contact-content').style.opacity = '1';

        document.querySelector('.contact-card-cont').classList.add('slideFromLeft');
        document.querySelector('.contact-card-cont').id = 'active';
        document.querySelector('.contact-form').classList.add('slideFromBottom');
        document.querySelector('.contact-form').id = 'active';


        animatedText = 'CONTACT';
        element = document.querySelector('.contact-title');
        element.classList.add('word');
        animate.call(animatedText);

        animatedTextObserver.unobserve(contact);
      } 
    }
  });
}

let animatedTextOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.40
}

let animatedTextObserver = new IntersectionObserver(typingAnimationHandle, animatedTextOptions);

animatedTextObserver.observe(about);
animatedTextObserver.observe(projects);
animatedTextObserver.observe(contact);


document.addEventListener('DOMContentLoaded', typingAnimationHome.call(document.querySelector('#name'), multWords[1]));

document.querySelector('#container').addEventListener('scroll', () => {
  document.querySelector('.scroll').style.display = 'none';
});


function scrollIntoViewHandler(event) {
  if (event.target.id == 'home-btn') {
    home.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});

  }

  if (event.target.id == 'about-btn') {
    about.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }

  else if (event.target.id == 'project-btn' || event.target.id == 'hero-project-btn' ) {
    projects.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }

  else if (event.target.id == 'contact-btn' || event.target.id == 'hero-contact-btn') {
    contact.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }
};



document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', scrollIntoViewHandler);
});

document.querySelector('#hero-project-btn').addEventListener('click', scrollIntoViewHandler);
document.querySelector('#hero-contact-btn').addEventListener('click', scrollIntoViewHandler);




let projectsArray = [];

function project() {
  this.name,
  this.description,
  this.screenshot,
  this.html,
  this.css,
  this.js
}

projectsArray.push(new project('Admin Dashboard', 'Administrator dashboard', 'NA', true, true, false));



console.log(projectsArray[0].name)