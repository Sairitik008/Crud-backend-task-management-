🗂️ Task Manager Web App

A simple Task Management Application built with Python Django for the backend and HTML, CSS, and JavaScript for the frontend.

Users can create, view, edit, and delete tasks easily through a clean web interface.

🚀 Features

Add new tasks with title and description

View all tasks dynamically

Edit and delete tasks

REST API built using Django REST Framework

Responsive, modern frontend design

🧱 Project Structure
task-manager/
│
├── backend/              # Django backend (API)
│   ├── manage.py
│   ├── taskmanager/
│   └── tasks/
│
├── frontend/             # Frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

⚙️ Backend Setup (Django)

Navigate to the backend folder:

cd backend


Create and activate a virtual environment:

python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate


Install dependencies:

pip install -r requirements.txt


If you don’t have one yet:

pip install django djangorestframework django-cors-headers


Run database migrations:

python manage.py makemigrations
python manage.py migrate


Start the development server:

python manage.py runserver


The API will be available at:
👉 http://127.0.0.1:8000/tasks/

💻 Frontend Setup

Open the frontend folder:

cd ../frontend


Open the index.html file directly in your browser
(or use VS Code Live Server to preview it).

Make sure your script.js file has the correct API URL:

const API_URL = 'http://127.0.0.1:8000/tasks/';

🔗 API Endpoints
Method	Endpoint	Description
GET	/tasks/	Get all tasks
POST	/tasks/	Create a new task
PUT	/tasks/:id/	Update a task
DELETE	/tasks/:id/	Delete a task
🧠 Example Task
{
  "id": 1,
  "title": "Write documentation",
  "description": "Finish the README for the project",
  "created_at": "2025-11-13T10:00:00Z"
}

🧰 Technologies Used

Frontend: HTML5, CSS3, JavaScript (ES6)

Backend: Python, Django, Django REST Framework

Database: SQLite (default)

Tools: CORS Headers, REST API

🚀 How to Run

Start the Django backend:

cd backend
python manage.py runserver


Open the frontend:

cd ../frontend


Then open index.html in your browser.

That’s it! The app will fetch and display tasks from the Django backend API.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Sairitik Naidu
📧 sairitiknaidu7@gmail.com

🌐 Sairitik008
