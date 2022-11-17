
/* 
var words = ['Hello, World!', 'Im Arhian Albis Ramos'],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 150;


var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    document.querySelector('.word').innerHTML = `${part}`;
  },speed);
};

document.addEventListener('DOMContentLoaded', function () {
    wordflick();
}); */

/* 

let words = ['Hello, World!', 'I\'m Arhian Albis Ramos', 'A self-taught web developer who is passionate about solving problems and building things with code. I am currently looking for new opportunities. Take a look around at some of the projects I\'ve built!','PROJECTS', 'RESUME'],
part,
i = 0,
offset = 0,
len = words.length,
speed = 80;

function wordFlick () {
    setInterval(() => {
        if (offset > words[i].length) {
            i++;
            offset = 0;
            if (i == 1) {
                document.querySelector('.word').classList.remove('word');
                document.querySelector('#name').classList.add('word');
            }

            else if (i == 2) {
                document.querySelector('.word').classList.remove('word');
                document.querySelector('#description').classList.add('word');
            }


            else if (i == 3) {
                document.querySelector('.word').classList.remove('word');
                document.querySelector('#hero-project-btn').classList.add('word');
            }

            else if (i == 4) {
                document.querySelector('.word').classList.remove('word');
                document.querySelector('#hero-resume-btn').classList.add('word');
            }

        }

        
        part = words[i].substr(0, offset);
        offset++;
        document.querySelector('.word').innerHTML = `${part}`;



    }, speed)
}

document.addEventListener('DOMContentLoaded', function () {
    wordFlick();
}); */

let multWords = ['Hello, World!', 'I\'m Arhian Albis Ramos', 'A self-taught web developer who is passionate about solving problems and building things with code. I am currently looking for new opportunities. Take a look around at some of the projects I\'ve built!','PROJECTS', 'RESUME'];

/* 
function letterEffect() {
    let speed = 150,
    letter = 0,
    i = 0;
    let interval = setInterval(() => {
        if (multWords[i] == undefined) {
            i=0;
            letter=0;
            clearInterval(interval);
            return;
        }

        if(letter > multWords[i].length) {
            i++;
            letter = 0;
            document.querySelector('.word').classList.remove('word');

            if (i==1) {
                document.querySelector('#name').classList.add('word');
            }

            else if (i==2) {
                document.querySelector('#hero-project-btn').classList.add('word');
            }

            else if(i==3) {
                document.querySelector('#hero-resume-btn').classList.add('word');
            }
        }
        part = multWords[i].substr(0, letter);
        document.querySelector('.word').innerHTML= `${part}`;
        letter++;
    }, speed)
} */

/* let singleWords = 'A self-taught web developer who is passionate about solving problems and building things with code. I am currently looking for new opportunities. Take a look around at some of the projects I\'ve built!'
 */
function letterEffect2(word) {
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
            if (this !== document.querySelector('#description')) {
                this.classList.remove('word');
            }
            return
        }

        part = word.substr(0, letter);
        this.innerHTML=`${part}`;
        letter++
    }, speed)
}

/* document.addEventListener('DOMContentLoaded', letterEffect2.call(document.querySelector('#hello'), multWords[0]));
 */

document.addEventListener('DOMContentLoaded', letterEffect2.call(document.querySelector('#name'), multWords[1]));
document.addEventListener('DOMContentLoaded', letterEffect2.call(document.querySelector('#description'), multWords[2]));
document.addEventListener('DOMContentLoaded', letterEffect2.call(document.querySelector('#hero-project-btn'), multWords[3]));
document.addEventListener('DOMContentLoaded', letterEffect2.call(document.querySelector('#hero-resume-btn'), multWords[4]));



/* document.addEventListener('DOMContentLoaded', letterEffect());
 */


