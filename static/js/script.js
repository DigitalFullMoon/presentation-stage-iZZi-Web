document.addEventListener('DOMContentLoaded', function() {
    // Gestion des modales pop-up
    const modalButtons = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Ouvrir une modale
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
    });
    
    // Fermer une modale
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('open');
            document.body.style.overflow = ''; // Rétablir le scroll
        });
    });
    
    // Fermer en cliquant en dehors de la modale
modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
    });
});