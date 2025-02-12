# **AI-Powered Beauty Consulting App**  
🚀 **An AI-driven beauty consulting platform with AR Virtual Try-On, personalized beauty recommendations, chatbot assistance, and an admin dashboard.**  

![Project Preview](https://via.placeholder.com/1000x500?text=Project+Preview)  

---

## **📌 Features**  
✅ **AI Beauty Consultation** – Get AI-powered personalized beauty recommendations.  
✅ **Augmented Reality (AR) Virtual Try-On** – Try makeup virtually before purchasing.  
✅ **Chatbot Assistant** – AI-powered chatbot for beauty-related queries.  
✅ **Admin Dashboard** – Manage beauty recommendations.  

---

## **🛠 Tech Stack**  
**Frontend:** React, React Router, Context API, CSS  
**Admin Dashboard:** React, Material-UI  
**Backend:** Flask, Firebase, Google Gemini AI  
**Database:** Firebase Firestore  
**APIs:** Google Gemini AI, Firebase  
**AR Library:** WebAR (for Virtual Try-On)  

---

## **📂 Project Structure**  
```
AI_Beauty_Consulting/
│── admin-dashboard/      # Admin panel for managing beauty recommendations
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.js
│   │   │   ├── Navbar.js
│   │   │   ├── Chatbot.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── BeautyConsult.js
│   │   │   ├── VirtualTryOn.js
│   ├── public/
│   ├── package.json
│── backend/              # Flask backend with AI and Firebase integration
│   ├── app.py
│   ├── config.py
│   ├── routes/
│   │   ├── beauty.py
│   │   ├── chatbot.py
│   ├── services/
│   │   ├── gemini_ai.py
│   │   ├── firebase.py
│   ├── requirements.txt
│── frontend/             # React user interface for AI beauty consultation
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   ├── public/
│   ├── package.json
│── venv/                 # Virtual environment for backend
│── .env                  # Environment variables
│── README.md             # Project documentation
```

---

## **🚀 Getting Started**  

### **🔹 1. Clone the Repository**  
```sh
git clone https://github.com/your-username/AI-Beauty-Consulting.git
cd AI-Beauty-Consulting
```

---

## **🛠 Backend Setup (Flask + Firebase + Google Gemini AI)**  

### **🔹 Step 1: Set Up a Virtual Environment**
```sh
cd backend
python -m venv venv
source venv/bin/activate   # On Mac/Linux
venv\Scripts\activate      # On Windows
```

### **🔹 Step 2: Install Dependencies**
```sh
pip install -r requirements.txt
```

### **🔹 Step 3: Set Up Environment Variables**  
Create a `.env` file inside `backend/` and add:  
```
GEMINI_API_KEY=your-google-gemini-api-key
FIREBASE_CONFIG=your-firebase-config
```

### **🔹 Step 4: Run the Backend Server**
```sh
python app.py
```
📌 **API will be available at:** `http://127.0.0.1:5000/`

---

## **🖥️ Frontend Setup (User Interface for AI Beauty Consultation)**  

### **🔹 Step 1: Install Dependencies**
```sh
cd frontend
npm install
```

### **🔹 Step 2: Run React Development Server**
```sh
npm start
```
📌 **Frontend UI will be available at:** `http://localhost:3000/`

---

## **🖥️ Admin Dashboard Setup (React + Material UI)**  

### **🔹 Step 1: Install Dependencies**
```sh
cd admin-dashboard
npm install
```

### **🔹 Step 2: Run Admin Panel**
```sh
npm start
```
📌 **Admin Dashboard will be available at:** `http://localhost:3001/`

---

## **🔍 Testing the API (Postman or cURL)**  

### **🔹 Check Beauty Recommendations API**
```sh
curl -X POST http://127.0.0.1:5000/beauty/recommendations -H "Content-Type: application/json" -d '{"user_preferences": "oily skin, dry lips"}'
```

### **🔹 Check Chatbot API**
```sh
curl -X POST http://127.0.0.1:5000/chatbot -H "Content-Type: application/json" -d '{"message": "Suggest a skincare routine"}'
```

✅ **If you get a response with recommendations, the API is working correctly!**

---

## **🖼 UI Preview**  

### **🔹 Admin Dashboard**  
✅ Sidebar with navigation  
✅ Dashboard overview  
✅ Beauty consultation page  

### **🔹 Beauty Consultation Page**  
✅ Users can enter skin concerns  
✅ AI-powered recommendations displayed  

### **🔹 AR Virtual Try-On**  
✅ Try makeup products virtually  
✅ Real-time AR filters  

---

## **📌 Future Enhancements**  
🔹 **AI Skin Analysis** – Use Google Vision API for skin analysis.  
🔹 **Push Notifications** – Notify users about new beauty trends.  

---

## **🤝 Contributing**  
Want to improve this project? Follow these steps:  
1. **Fork the repository**  
2. **Create a new branch:** `git checkout -b feature-branch`  
3. **Make your changes**  
4. **Commit and push:** `git push origin feature-branch`  
5. **Open a Pull Request**  

---

## **📜 License**  
📄 MIT License – Free to use and modify.  

---

## **📞 Contact**  
💌 **Email:** clashruban12@gmail.com  
🔗 **GitHub:** [github.com/Ruban1808](https://github.com/Ruban1808)  
 
---

### 🎉 **Enjoy your AI-Powered Beauty Consulting App! 🚀**  
