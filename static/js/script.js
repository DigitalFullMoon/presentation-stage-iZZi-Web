document.addEventListener('DOMContentLoaded', function () {
    // Gestion des modales pop-up
    const modalButtons = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Ouvrir une modale
    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
    });

    // Fermer une modale
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('open');
            document.body.style.overflow = ''; // Rétablir le scroll
        });
    });

    // Fermer en cliquant en dehors de la modale
    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
    });
});

// Gestion des pop-ups d'images
document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.image-popup');

    imageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const imageName = this.getAttribute('data-image');
            const imageUrl = `${window.location.origin}/static/images/${imageName}`;

            // Créer la modale d'image
            const imageModal = document.createElement('div');
            imageModal.className = 'modal image-modal open';
            imageModal.innerHTML = `
                <div class="modal-dialog image-dialog">
                    <button class="image-close-btn" aria-label="Fermer">&times;</button>
                    <div class="image-container">
                        <img src="${imageUrl}" alt="${imageName}" class="popup-image">
                    </div>
                </div>
            `;

            document.body.appendChild(imageModal);
            document.body.style.overflow = 'hidden'; // Bloquer le scroll

            // Fonction de fermeture
            const closeModal = function () {
                if (document.body.contains(imageModal)) {
                    document.body.removeChild(imageModal);
                    document.body.style.overflow = ''; // Rétablir le scroll
                }
            };

            // Fermer avec la croix
            const closeBtn = imageModal.querySelector('.image-close-btn');
            closeBtn.addEventListener('click', closeModal);

            // Fermer en cliquant n'importe où
            imageModal.addEventListener('click', function (e) {
                closeModal();
            });

            // Empêcher la fermeture quand on clique sur l'image elle-même
            const imageDialog = imageModal.querySelector('.image-dialog');
            imageDialog.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            // Fermer avec Échap
            const escapeHandler = function (e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);

            // Nettoyage quand la modale est fermée
            imageModal.addEventListener('animationend', function () {
                if (!this.classList.contains('open')) {
                    closeModal();
                }
            });
        });
    });
});