const navIcons = document.querySelectorAll('.nav-icon');

navIcons.forEach(icon => {
icon.addEventListener('click', () => {
    navIcons.forEach(navIcon => navIcon.classList.remove('active'));
    icon.classList.add('active');
});
});

// Fonction pour afficher ou masquer la sidebar des notifications
function toggleNotificationSidebar() {
    var sidebar = document.getElementById('notificationSidebar');
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-300px'; // Masquer la sidebar
    } else {
        sidebar.style.right = '0px'; // Afficher la sidebar
    }
}

// Écouteur d'événement pour le clic sur le bouton de notifications
document.getElementById('sidebarCollapse').addEventListener('click', toggleNotificationSidebar);

  