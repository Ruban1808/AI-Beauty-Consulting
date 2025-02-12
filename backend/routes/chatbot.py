from flask import Blueprint, request, jsonify
from services.gemini_ai import generate_gemini_response

chatbot_routes = Blueprint("chatbot", __name__)

@chatbot_routes.route("/api/chatbot", methods=["POST"])
def chatbot():
    try:
        data = request.json
        user_message = data.get("message", "")

        if not user_message:
            return jsonify({"error": "Message cannot be empty"}), 400

        # Get AI-generated response from Google Gemini
        ai_response = generate_gemini_response(user_message)

        return jsonify({"response": ai_response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
