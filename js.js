

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        menu.classList.toggle('is-active'); 
    });
}

// let value = document.querySelectorAll('.num');
// let intervel = 5000;
// console.log(value);

// value.forEach((x) => {
//     let start = 0;
//     let end = parseInt(x.getAttribute('data-num'));
//     let duration = Math.floor(start / end);
//     let counter = setInterval(() => {
//         start++;
//         value.textcontent = start;
//         if (start == end) {
//             clearInterval(counter);
//         }
//     }, duration);
        
//     });




// window.onload = function () {
//     const menu_btn = document.querySelector('.hamburger');
//     const menu = document.querySelector('.mobile-nav');

//     menu_btn.addEventListener('click', function () {
//         menu_btn.classList.toggle('is-active');
//         menu.classList.toggle('is-active'); 
//     });
// }


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function startCountingAnimation() {
    const valueElements = document.querySelectorAll('.num');

    valueElements.forEach((x) => {
        if (isElementInViewport(x)) {
            let start = 0;
            let end = parseInt(x.getAttribute('data-val'));
            let duration = 4000; 
            let step = (end - start) / (duration / 1000); 

            let counter = setInterval(() => {
                start += step;
                x.textContent = Math.round(start);
                if (start >= end) {
                    clearInterval(counter);
                    x.textContent = end; 
                }
            }, 100); 
        }
    });
}


window.addEventListener('scroll', startCountingAnimation);



