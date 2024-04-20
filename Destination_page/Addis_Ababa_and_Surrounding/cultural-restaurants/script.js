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

const dropHead = document.querySelectorAll('.drop-head');
// const text = document.querySelectorAll('.drop-text');

dropHead.forEach(head => {
    head.addEventListener('click', () => {
        head.classList.toggle('red');
        const text = head.nextElementSibling;
        if (text.style.maxHeight){
            text.style.maxHeight = null;
          } else {
            text.style.maxHeight = text.scrollHeight + "px";
          }
    })
});