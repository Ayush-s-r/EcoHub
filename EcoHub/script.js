let divid = document.querySelectorAll('.card');
let count = document.querySelector('.counter p');
divid.forEach( card => {
    card.addEventListener('click', () => {
        count.textContent = `${card.id}`;
    })
})

divid.forEach( card => {
    card.addEventListener('mouseover', () => {
        count.textContent = `${card.id}`;
    })
})
var slider1 = document.getElementById('slider1');
var tbIcon1 = document.querySelector('#tbIcon1');
let sliderContent = document.querySelector('.slider-content');

let toggleButton1 = document.getElementById('toggleButton1')
toggleButton1.addEventListener('click', function() {
       if (slider1.style.left === '0vw') {
        slider1.style.left = '52.1vw'; // Hide the slider
        tbIcon1.classList.remove('rotate');
        toggleButton1.style.width = '9vw';
        toggleButton1.style.left = '-9vw';
        
        

    } else {
        slider1.style.left = '0vw'; // Show the slider
        tbIcon1.classList.add('rotate');
        toggleButton1.style.width = '4.5vw';
        toggleButton1.style.left = '-4.5vw';
        
    }
});



var slider2 = document.getElementById('slider2');
var tbIcon2 = document.querySelector('#tbIcon2');

document.getElementById('toggleButton2').addEventListener('click', function() {
       if (slider2.style.left === '0vw' ) {
        slider2.style.left = '52vw'; 
        tbIcon2.classList.remove('rotate');
        slider1.style.visibility = 'visible';
    } else {
        slider2.style.left = '0vw'; 
        tbIcon2.classList.add('rotate');
        slider1.style.visibility = 'hidden';

    }
    }
);



let learnMore = document.querySelector('.learn-more-button');
let introContainer = document.querySelector('.intro-container');
learnMore.addEventListener('click', function() {
    introContainer.scrollIntoView();    
});





