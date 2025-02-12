from flask import Flask
from flask_cors import CORS
from routes.auth import auth_routes  # Import the authentication routes

app = Flask(__name__)
CORS(app)

# Register authentication routes
app.register_blueprint(auth_routes)

if __name__ == "__main__":
    app.run(debug=True)
