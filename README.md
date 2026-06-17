# 🌾 A Machine Learning Based Agriculture Support System for Crop Yield Prediction and Recommendation

## 📖 Overview

This project is a Machine Learning-based Agriculture Support System developed to assist farmers in making data-driven agricultural decisions. The system provides crop recommendations, fertilizer recommendations, and crop yield predictions based on soil, environmental, and agricultural parameters.

## 🚀 Features

### 🌱 Crop Recommendation
- Recommends the most suitable crop based on:
  - Nitrogen (N)
  - Phosphorus (P)
  - Potassium (K)
  - Temperature
  - Humidity
  - pH
  - Rainfall

### 🧪 Fertilizer Recommendation
- Suggests fertilizer requirements based on:
  - Recommended crop
  - Soil type
  - Climate conditions
  - Land type

### 📈 Crop Yield Prediction
- Predicts crop yield using:
  - Crop type
  - Area
  - Rainfall
  - Temperature
  - Pesticide usage
  - Year

## 🛠 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Machine Learning
- Scikit-Learn
- Pandas
- NumPy

### Development Tools
- VS Code
- Jupyter Notebook
- Git
- GitHub

## 📂 Project Structure

```text
Agriculture-Support-System/
│
├── app.py
├── crop_model.pkl
├── fertilizer_model.pkl
├── yield_model.pkl
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── Crop_recommendation.csv
├── fertilizer.csv
├── yield_df.csv
│
├── CROP_FERTILIZER_FINAL.ipynb
├── yield_prediction.ipynb
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Agriculture-Support-System.git
```

### Move to Project Folder

```bash
cd Agriculture-Support-System
```

### Install Dependencies

```bash
pip install flask pandas numpy scikit-learn
```

### Run Application

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

## 🎯 Objectives

- Improve agricultural decision making.
- Recommend suitable crops.
- Suggest fertilizers for better productivity.
- Predict crop yield using machine learning.
- Provide an easy-to-use web interface for farmers.

## 🔮 Future Enhancements

- Real-time weather integration.
- User authentication.
- Cloud deployment.
- Mobile application support.
- AI-powered agricultural chatbot.

##👨‍💻 Author

**Kris**

MCA Graduate | Full Stack Developer | Machine Learning Enthusiast

##🔗 Project Links

GitHub Repository:
https://github.com/yourusername/Agriculture-Support-System

Live Demo:
(Add deployment URL after hosting on Render or PythonAnywhere)
