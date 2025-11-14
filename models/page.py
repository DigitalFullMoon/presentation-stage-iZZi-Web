from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Page(db.Model):
    __tablename__ = 'pages'
    
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(50), unique=True, nullable=False)
    titre = db.Column(db.String(255), nullable=False)
    contenu = db.Column(db.Text)
    ordre = db.Column(db.Integer, unique=True, nullable=False)
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())
    updated_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
    
    def __repr__(self):
        return f'<Page {self.slug}>'

class Image(db.Model):
    __tablename__ = 'images'
    
    id = db.Column(db.Integer, primary_key=True)
    page_id = db.Column(db.Integer, db.ForeignKey('pages.id'), nullable=False)
    nom_fichier = db.Column(db.String(255))
    legende = db.Column(db.Text)
    ordre = db.Column(db.Integer, default=0)
    
    # Relation
    page = db.relationship('Page', backref=db.backref('images', lazy=True))
    
    def __repr__(self):
        return f'<Image {self.nom_fichier}>'