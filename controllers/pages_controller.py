from flask import Blueprint, render_template
from models.page import db, Page

pages_bp = Blueprint('pages', __name__)

# Configuration de la navigation
PAGES_ORDER = ['accueil', 'contexte', 'mission', 'methodologie', 'conclusion']

def get_navigation(current_slug):
    """Retourne les pages précédente et suivante"""
    current_index = PAGES_ORDER.index(current_slug)
    
    previous_slug = PAGES_ORDER[(current_index - 1) % len(PAGES_ORDER)]
    next_slug = PAGES_ORDER[(current_index + 1) % len(PAGES_ORDER)]
    
    return previous_slug, next_slug

@pages_bp.route('/')
def accueil():
    page = Page.query.filter_by(slug='accueil').first()
    previous_slug, next_slug = get_navigation('accueil')
    return render_template('accueil.html', 
                         page=page, 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)

@pages_bp.route('/<slug>')
def page(slug):
    if slug not in PAGES_ORDER:
        return "Page non trouvée", 404
    
    page = Page.query.filter_by(slug=slug).first()
    if not page:
        return "Page non trouvée", 404
        
    previous_slug, next_slug = get_navigation(slug)
    return render_template(f'{slug}.html', 
                         page=page, 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)