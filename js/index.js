// Function to toggle the sidebar visibility
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px';
    } else {
        sidebar.style.right = '0px';
    }
}

// Function to close the sidebar
function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.right = '-250px';
}

// Event listener for the hamburger menu
document.getElementById('hamburger').addEventListener('click', toggleSidebar);

// Event listener for the close button
document.querySelector('.close').addEventListener('click', closeSidebar);

// Event listener for clicks outside the sidebar
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var isClickInsideSidebar = sidebar.contains(event.target);
    var isClickOnHamburger = document.getElementById('hamburger').contains(event.target);
    var isClickOnCloseButton = document.querySelector('.close').contains(event.target);

    // Check if the click is outside the sidebar and not on the hamburger menu or close button
    if (!isClickInsideSidebar && !isClickOnHamburger && !isClickOnCloseButton) {
        closeSidebar();
    }
});
