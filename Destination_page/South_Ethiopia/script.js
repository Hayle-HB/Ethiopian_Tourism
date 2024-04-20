function humClick() {
    let menu = document.getElementById('menubtn');
    let hum1 = document.getElementById('hum1');
    let hum2 = document.getElementById('hum2');
    if(menu.style.display=='flex'){
        menu.style.display='none';
    }
    else {
        menu.style.display='flex';
    }

    if(hum1.style.display=='none'){
        hum2.style.display='none';
        hum1.style.display='block';
    }
    else {
        hum2.style.display='block';
        hum1.style.display='none';
    }
}

showHumContent();
function showHumContent() {
    let menubtn = document.getElementsByClassName('menu-button');

    for(let i = 0; i < menubtn.length; i++) {
        menubtn[i].addEventListener("click", function(){
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if(content.style.display=='block'){
                content.style.display='none';
            }
            else {
                content.style.display='block';
            }
        })
    }
}

// animation
const animatedElements = document.querySelectorAll('.imgbox');

function checkVisibility() {
    animatedElements.forEach(element => {
        const boundingBox = element.getBoundingClientRect();
        if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
            element.classList.add('active');
        }
    });
}

checkVisibility();

document.addEventListener('scroll', checkVisibility);

