import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load API Key from .env file
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize Google Gemini AI
genai.configure(api_key=GEMINI_API_KEY)

def generate_gemini_response(user_message):
    """Generates a chatbot response using Google Gemini AI"""
    try:
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(user_message)

        return response.text if response.text else "I'm sorry, I didn't understand that."

    except Exception as e:
        return f"Error: {str(e)}"
