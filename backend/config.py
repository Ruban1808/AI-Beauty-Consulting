import os
import firebase_admin
from firebase_admin import credentials, auth

# Set SECRET_KEY for JWT authentication
SECRET_KEY = os.environ.get("SECRET_KEY", "Ruban123")

# Path to Firebase credentials JSON file
firebase_config_path = "firebase/serviceAccountKey.json"

# Check if Firebase is already initialized to avoid duplicate initialization
if not firebase_admin._apps:
    cred = credentials.Certificate(firebase_config_path)
    firebase_admin.initialize_app(cred)
