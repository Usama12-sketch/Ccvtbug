const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if (bar)  {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close)  {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const boxes = document.querySelectorAll('.boxes2');

window.addEventListener('scroll',
checkboxes);
checkboxes();

function checkboxes( ) {
    const triggerbottom = window.innerHeight / 5
    * 4;

 boxes.forEach((boxes2) => {
    const boxtop = boxes2.getBoundingClientRect().top;
    if (boxtop < triggerbottom) {
        boxes2.classList.add('show');

    }
    else {
        boxes2.classList.remove('show');
    }
 })

}
