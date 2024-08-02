document.addEventListener('DOMContentLoaded', function () {
    const tipBoxes = document.querySelectorAll('.tip-box');
    tipBoxes.forEach((box, index) => {
    box.addEventListener('mouseover', function() {
    box.querySelector('.tip-number').style.transform = 'rotate(0deg)';
    box.querySelector('.tip-number').style.backgroundColor = '#2e8b57';
    });
    box.addEventListener('mouseout', function() {
    box.querySelector('.tip-number').style.transform = 'rotate(-15deg)';
    box.querySelector('.tip-number').style.backgroundColor = '#4b6f44';
    });
    });
    })