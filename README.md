# Django React App (Dockerized)

This repository contains a full-stack **Django + React** application running inside Docker containers.

## Features
- **Backend**: Django (Django REST Framework)
- **Frontend**: React 
- **Database**: SQLite (Django's Default)
- **Containerized** with Docker and Docker Compose

---

## Setup & Installation

### 1. Clone the Repository
```sh
git clone https://github.com/Rishavanand9/kudos-app.git
cd kudos-app  
```

### 2. Environment Variables
Create a `.env` file in the root directory and add the following variables:

```env
# Backend
# Frontend
```

---

## Running the Application

### Using Docker (Recommended)
Run the entire stack using Docker Compose:

```sh
docker-compose up --build  
```

This will:
- Start the Django backend at **http://localhost:8000/admin**
- Start the React frontend at **http://localhost:80**

### Running Without Docker

#### Backend (Django)
```sh
cd backend/
pip install -r requirements.txt
cd app/
python manage.py migrate  
python manage.py createsuperuser  #Create Super User / Admin 
python manage.py runserver
```

#### Frontend (React)
```sh
cd frontend  
npm install  
npm start  
```

---

## Development

### Rebuilding Docker Containers
If you make changes to dependencies, rebuild the containers:
```sh
docker-compose up --build --force-recreate  
```

### Running Migrations (Django)
```sh
docker exec -it backend python manage.py migrate
```

### Delete existing docker images to clear up space
```sh
docker system prune
```

### Creating a Superuser (Django Admin) via Docker
```sh
docker exec -it backend python manage.py createsuperuser  
```

---

## API Endpoints  
| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| POST    | `/login/`            | For Login          |
| GET   | `/users/` | Users List            |
| POST   | `/kudos/send/`| Send Kudos     |
| POST    | `/kudos/recieved/`      | Get Current uSERs Kudos       |

📌 Check the full API documentation by copying api.yaml into https://editor-next.swagger.io/

---

---

## Author  
- **Rishav Anand** ([@Rishavanand9](https://github.com/Rishavanand9))  

---

Happy coding! 🚀
