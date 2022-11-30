
let about = document.querySelector('#about-nav'),
projects = document.querySelector('#projects'),
contact = document.querySelector('#contact'),
home = document.querySelector('#home'),
menu = document.querySelector('.media-menu'),
projectBtns = document.querySelectorAll('.projects-btns-cont button'),
projectNextBtn = document.querySelector('.next-btn'),
projectPrevBtn = document.querySelector('.prev-btn');



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
        document.querySelector('.about-learn-cont').classList.add('slideFromLeft');
        document.querySelector('.about-learn-cont').id = 'active';


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

  else if (event.target.id == 'project-btn' || event.target.id == 'hero-project-btn' || event.target.id == 'about-learn-projectLink') {
    projects.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }

  else if (event.target.id == 'contact-btn' || event.target.id == 'hero-contact-btn') {
    contact.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }
};

document.querySelector('#about-learn-projectLink').addEventListener('click', scrollIntoViewHandler);

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', scrollIntoViewHandler);
});

document.querySelector('#hero-project-btn').addEventListener('click', scrollIntoViewHandler);
document.querySelector('#hero-contact-btn').addEventListener('click', scrollIntoViewHandler);




let projectsArray = [];

function project(title, description, html, css, js) {
  this.title = title,
  this.description = description,
  this.html = html,
  this.css = css,
  this.js = js;
}

projectsArray.push(
  (new project('Admin Dashboard', 'Administrator dashboard UI built from scratch using HTML and CSS.',true, true, false)),
  (new project('Sign Up Form with Client-Side Validation', 'Utilized the Constraint Validation API on JavaScript to build a sign up form with client-side validation. The form features required field validation, email and phone number specific format validation, and password validation', true, true, true)),
  (new project('Arhian\'s Library', 'Library web application that allows users to add/remove books, mark books as favorite, and mark books as read/unread. Utilized HTML, CSS and vanilla JS.', true, true, true)),
  (new project('Etch-A-Sketch', 'Web-based Etch-A-Sketch type game that allows users to choose a grid size and draw in it using their mouse. Made using vanilla JS', false, false, true)),
  (new project('RPS', 'Rock, paper, scissors web game that allows users to play 1-Round or 5-Round games vs the computer. The UI features a scoreboard which announces the best-of-1 or best-of-5 game winner.', true, true, true)),
  (new project('Calculator', 'Web-based calculator that supports basic operations such as addition, subtraction, multiplication, and division in a left-to-right format (not PEMDAS). Utilized HTML and CSS for the UI and vanilla JS for the logic.', true, true, true)),
  (new project('Drum Kit', 'Midi controller-type feature that allows users to play different instruments and beats using their keyboard and/or mouse. Made using vanilla JS.', false, false, true)),
  (new project('Landing Page', 'Built a static landing page using HTML and CSS that features a nav bar, a hero, content cards, and call to action at the end.', true, true, false))
);


  
for (btn of projectBtns) {
  btn.addEventListener('click', event => {
    let project = {},
    tab = document.querySelector('.tab'),
    projectTitle = document.querySelector('p.project-title'),
    projectDesc = document.querySelector('p.project-desc'),
    projectPic = document.querySelector('.project-screenshot img'),
    projectHTML = document.querySelector('#html'),
    projectCSS = document.querySelector('#css'),
    projectJS = document.querySelector('#js');


    function activeIcons() {
      if(project.html == false) {
        projectHTML.style.opacity = '15%';
      }
    
      else projectHTML.style.opacity = '100%';
    
    
      if(project.css == false) {
        projectCSS.style.opacity = '15%';
      }
    
      else projectCSS.style.opacity = '100%';
    
      if(project.js == false) {
        projectJS.style.opacity = '15%';
      }
    
      else projectJS.style.opacity = '100%';
    }
    
    if (event.target.classList == 'prjt-dash') {
      project = projectsArray[0];
      tab.style.top = '0px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;
      
      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/Dashboard.png';
    }

    else if (event.target.classList == 'prjt-form') {
      project = projectsArray[1];
      tab.style.top = '60px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/Sign Up Form.png'

    }

    else if (event.target.classList == 'prjt-library') {
      project = projectsArray[2];
      tab.style.top = '120px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/Library.png'
    }

    else if (event.target.classList == 'prjt-sketch') {
      project = projectsArray[3];
      tab.style.top = '180px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/EtchASketch.png'

    }

    else if (event.target.classList == 'prjt-rps') {
      project = projectsArray[4];
      tab.style.top = '240px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/RPS.png';

    }

    else if (event.target.classList == 'prjt-calc') {
      project = projectsArray[5];
      tab.style.top = '300px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/Calculator.png';

    }

    else if (event.target.classList == 'prjt-drum') {
      project = projectsArray[6];
      tab.style.top = '360px';
      tab.style.height = '60px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/Drum Kit.png';

    }

    else if (event.target.classList == 'prjt-landing') {
      project = projectsArray[7];
      tab.style.top = '420px';
      tab.style.height = '90px';
      document.querySelector('#projects-btns-active').id = '';
      event.target.id = 'projects-btns-active';

      projectTitle.innerHTML = `${project.title}`;
      projectDesc.innerHTML = `${project.description}`;

      activeIcons();

      projectPic.src = './assets/Images/projects-screenshots/Landing Page.png'

    }
  })
}

let i = 0;

projectNextBtn.addEventListener('click', event => {
  let project = {},
  projectTitle = document.querySelector('p.project-title'),
  projectDesc = document.querySelector('p.project-desc'),
  projectPic = document.querySelector('.project-screenshot img'),
  projectHTML = document.querySelector('#html'),
  projectCSS = document.querySelector('#css'),
  projectJS = document.querySelector('#js');

  function activeIcons() {
    if(project.html == false) {
      projectHTML.style.opacity = '15%';
    }
  
    else projectHTML.style.opacity = '100%';
  
  
    if(project.css == false) {
      projectCSS.style.opacity = '15%';
    }
  
    else projectCSS.style.opacity = '100%';
  
    if(project.js == false) {
      projectJS.style.opacity = '15%';
    }
  
    else projectJS.style.opacity = '100%';
  }
  i++;
  if (i==8) {
    i=0;
  }
  project = projectsArray[i];

  projectTitle.innerHTML = `${project.title}`;
  projectDesc.innerHTML = `${project.description}`;
  
  if (project.title == 'Admin Dashboard') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Dashboard.png';
  }

  else if (project.title == 'Sign Up Form with Client-Side Validation') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Sign Up Form.png';
  }
  else if (project.title == 'Arhian\'s Library') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Library.png';
  }
  else if (project.title == 'Etch-A-Sketch') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/EtchASketch.png';
  }
  else if (project.title == 'RPS') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/RPS.png';
  }
  else if (project.title == 'Calculator') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Calculator.png';
  }
  else if (project.title == 'Drum Kit') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Drum Kit.png';
  }
  else if (project.title == 'Landing Page') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Landing Page.png';
    i= -1;
  }
})

projectPrevBtn.addEventListener('click',  event => {
  let project = {},
  projectTitle = document.querySelector('p.project-title'),
  projectDesc = document.querySelector('p.project-desc'),
  projectPic = document.querySelector('.project-screenshot img'),
  projectHTML = document.querySelector('#html'),
  projectCSS = document.querySelector('#css'),
  projectJS = document.querySelector('#js');

  function activeIcons() {
    if(project.html == false) {
      projectHTML.style.opacity = '15%';
    }
  
    else projectHTML.style.opacity = '100%';
  
  
    if(project.css == false) {
      projectCSS.style.opacity = '15%';
    }
  
    else projectCSS.style.opacity = '100%';
  
    if(project.js == false) {
      projectJS.style.opacity = '15%';
    }
  
    else projectJS.style.opacity = '100%';
  }

  i--;
  if (i == -1) {i=7};
  project = projectsArray[i];

  projectTitle.innerHTML = `${project.title}`;
  projectDesc.innerHTML = `${project.description}`;
  
  if (project.title == 'Admin Dashboard') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Dashboard.png';
    i=8;
  }

  else if (project.title == 'Sign Up Form with Client-Side Validation') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Sign Up Form.png';
  }
  else if (project.title == 'Arhian\'s Library') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Library.png';
  }
  else if (project.title == 'Etch-A-Sketch') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/EtchASketch.png';
  }
  else if (project.title == 'RPS') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/RPS.png';
  }
  else if (project.title == 'Calculator') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Calculator.png';
  }
  else if (project.title == 'Drum Kit') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Drum Kit.png';
  }
  else if (project.title == 'Landing Page') {
    activeIcons();
    projectPic.src = './assets/Images/projects-screenshots/Landing Page.png';
  }

})

