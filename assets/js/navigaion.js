// Function to load HTML components
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Mark the current page as active in navigation
            markCurrentPageActive();
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Function to mark the current page as active in navigation
function markCurrentPageActive() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Select all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Loop through links and mark the current one as active
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('components/header.html', 'header-container');
    loadComponent('components/footer.html', 'footer-container');
});