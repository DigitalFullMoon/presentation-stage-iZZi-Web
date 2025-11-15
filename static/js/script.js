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

// Gestion des modales pop-up (EXISTANT)
document.addEventListener('DOMContentLoaded', function () {
    // Gestion des modales standard
    const modalButtons = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Ouvrir une modale
    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            // Initialiser le slider si c'est la modale Vue Maman
            if (modalId === 'maman-modal') {
                initMamanSlider();
            }
        });
    });

    // Fermer une modale
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('open');
            document.body.style.overflow = '';
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

    // Gestion des pop-ups d'images (EXISTANT)
    const imageLinks = document.querySelectorAll('.image-popup');
    imageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const imageName = this.getAttribute('data-image');
            const imageUrl = `${window.location.origin}/static/images/${imageName}`;

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
            document.body.style.overflow = 'hidden';

            const closeModal = function () {
                if (document.body.contains(imageModal)) {
                    document.body.removeChild(imageModal);
                    document.body.style.overflow = '';
                }
            };

            const closeBtn = imageModal.querySelector('.image-close-btn');
            closeBtn.addEventListener('click', closeModal);

            imageModal.addEventListener('click', function (e) {
                closeModal();
            });

            const imageDialog = imageModal.querySelector('.image-dialog');
            imageDialog.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            const escapeHandler = function (e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
        });
    });
});

// Gestion des modales pop-up
document.addEventListener('DOMContentLoaded', function () {
    // Gestion des modales standard
    const modalButtons = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Ouvrir une modale
    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            // Initialiser le slider correspondant
            if (modalId === 'maman-modal') {
                initMamanSlider();
            } else if (modalId === 'pharmacien-modal') {
                initPharmacienSlider();
            } else if (modalId === 'prestashop-modal') {
                initPrestaShopSlider();
            }
        });
    });

    // Fermer une modale
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('open');
            document.body.style.overflow = '';
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

    // Gestion des pop-ups d'images
    const imageLinks = document.querySelectorAll('.image-popup');
    imageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const imageName = this.getAttribute('data-image');
            const imageUrl = `${window.location.origin}/static/images/${imageName}`;

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
            document.body.style.overflow = 'hidden';

            const closeModal = function () {
                if (document.body.contains(imageModal)) {
                    document.body.removeChild(imageModal);
                    document.body.style.overflow = '';
                }
            };

            const closeBtn = imageModal.querySelector('.image-close-btn');
            closeBtn.addEventListener('click', closeModal);

            imageModal.addEventListener('click', function (e) {
                closeModal();
            });

            const imageDialog = imageModal.querySelector('.image-dialog');
            imageDialog.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            const escapeHandler = function (e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
        });
    });
});

// ===== SLIDER VUE MAMAN =====
function initMamanSlider() {
    console.log('🚀 Initialisation du slider Vue Maman...');
    
    const slides = document.querySelectorAll('#maman-modal .slide');
    const dots = document.querySelectorAll('#maman-modal .dot');
    const prevArrow = document.querySelector('#maman-modal .prev-arrow');
    const nextArrow = document.querySelector('#maman-modal .next-arrow');
    
    console.log('📊 Slides Maman trouvés:', slides.length);
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }

    if (nextArrow) nextArrow.addEventListener('click', nextSlide);
    if (prevArrow) prevArrow.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    slideInterval = setInterval(nextSlide, 5000);
    showSlide(0);
    
    console.log('🎉 Slider Vue Maman initialisé !');
}

// ===== SLIDER VUE PHARMACIEN =====
function initPharmacienSlider() {
    console.log('🚀 Initialisation du slider Vue Pharmacien...');
    
    const slides = document.querySelectorAll('#pharmacien-modal .slide');
    const dots = document.querySelectorAll('#pharmacien-modal .dot');
    const prevArrow = document.querySelector('#pharmacien-modal .prev-arrow');
    const nextArrow = document.querySelector('#pharmacien-modal .next-arrow');
    
    console.log('📊 Slides Pharmacien trouvés:', slides.length);
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }

    if (nextArrow) nextArrow.addEventListener('click', nextSlide);
    if (prevArrow) prevArrow.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    slideInterval = setInterval(nextSlide, 5000);
    showSlide(0);
    
    console.log('🎉 Slider Vue Pharmacien initialisé !');
}

// ===== SLIDER VUE PRESTASHOP =====
function initPrestaShopSlider() {
    console.log('🚀 Initialisation du slider Vue PrestaShop...');
    
    const slides = document.querySelectorAll('#prestashop-modal .slide');
    const dots = document.querySelectorAll('#prestashop-modal .dot');
    const prevArrow = document.querySelector('#prestashop-modal .prev-arrow');
    const nextArrow = document.querySelector('#prestashop-modal .next-arrow');
    
    console.log('📊 Slides PrestaShop trouvés:', slides.length);
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }

    if (nextArrow) nextArrow.addEventListener('click', nextSlide);
    if (prevArrow) prevArrow.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    slideInterval = setInterval(nextSlide, 5000);
    showSlide(0);
    
    console.log('🎉 Slider Vue PrestaShop initialisé !');
}

// ===== GESTION DES SLIDERS AU CHARGEMENT =====
setTimeout(() => {
    console.log('🔧 Vérification des sliders...');
    
    const mamanModal = document.getElementById('maman-modal');
    const pharmacienModal = document.getElementById('pharmacien-modal');
    const prestashopModal = document.getElementById('prestashop-modal');
    
    if (mamanModal) console.log('✅ Modale Vue Maman détectée');
    if (pharmacienModal) console.log('✅ Modale Vue Pharmacien détectée');
    if (prestashopModal) console.log('✅ Modale Vue PrestaShop détectée');
}, 100);