



document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class to change the button style
        button.classList.toggle('active');
              

        // Get the associated content
        const content = button.nextElementSibling;

        // Check if the content is already open
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            // Close all other open sections
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.style.display = 'none';
            });
            // Open the clicked section
            content.style.display = 'block';
        }
    });
});
