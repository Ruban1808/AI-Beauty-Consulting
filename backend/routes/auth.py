from flask import Blueprint, request, jsonify
import jwt
import datetime
import bcrypt
from config import SECRET_KEY

auth_routes = Blueprint("auth_routes", __name__)

# Dummy admin credentials (You can store these securely in a database)
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = bcrypt.hashpw("admin123".encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

# Admin Login Route
@auth_routes.route("/api/admin/login", methods=["POST"])
def admin_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username == ADMIN_USERNAME and bcrypt.checkpw(password.encode('utf-8'), ADMIN_PASSWORD.encode('utf-8')):
        token = jwt.encode(
            {"user": username, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
            SECRET_KEY,
            algorithm="HS256",
        )
        return jsonify({"token": token}), 200

    return jsonify({"error": "Invalid credentials"}), 401
