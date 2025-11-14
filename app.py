from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Configuration de la navigation
PAGES_ORDER = ['accueil', 'contexte', 'mission', 'methodologie', 'conclusion']

def get_navigation(current_slug):
    current_index = PAGES_ORDER.index(current_slug)
    previous_slug = PAGES_ORDER[(current_index - 1) % len(PAGES_ORDER)]
    next_slug = PAGES_ORDER[(current_index + 1) % len(PAGES_ORDER)]
    return previous_slug, next_slug

# Routes directes sans Blueprint
@app.route('/')
def accueil():
    previous_slug, next_slug = get_navigation('accueil')
    return render_template('accueil.html', 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)

@app.route('/contexte')
def contexte():
    previous_slug, next_slug = get_navigation('contexte')
    return render_template('contexte.html', 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)

@app.route('/mission')
def mission():
    previous_slug, next_slug = get_navigation('mission')
    return render_template('mission.html', 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)

@app.route('/methodologie')
def methodologie():
    previous_slug, next_slug = get_navigation('methodologie')
    return render_template('methodologie.html', 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)

@app.route('/conclusion')
def conclusion():
    previous_slug, next_slug = get_navigation('conclusion')
    return render_template('conclusion.html', 
                         previous_slug=previous_slug, 
                         next_slug=next_slug)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)