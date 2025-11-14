import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'ma_cle_secrete_dev')
    
    # SQLite pour éviter les problèmes MySQL
    SQLALCHEMY_DATABASE_URI = 'sqlite:///presentation.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Gardez les configs MySQL pour plus tard (optionnel)
    MYSQL_HOST = os.getenv('MYSQL_HOST', 'localhost')
    MYSQL_USER = os.getenv('MYSQL_USER', 'root')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
    MYSQL_DB = os.getenv('MYSQL_DB', 'presentation_rapport_stage')
    MYSQL_PORT = int(os.getenv('MYSQL_PORT', 3306))