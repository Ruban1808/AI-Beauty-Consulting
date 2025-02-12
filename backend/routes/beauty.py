from flask import Blueprint, request, jsonify
from utils.gemini_ai import get_beauty_recommendation

beauty_routes = Blueprint("beauty_routes", __name__)

@beauty_routes.route("/api/beauty-consult", methods=["POST"])
def beauty_consult():
    try:
        data = request.get_json()
        user_input = data.get("query", "")

        if not user_input:
            return jsonify({"error": "No input provided"}), 400

        recommendation = get_beauty_recommendation(user_input)
        return jsonify({"recommendation": recommendation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
