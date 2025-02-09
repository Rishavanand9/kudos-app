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
git clone [git@github.com:Rishavanand9/kudos-app.git](https://github.com/Rishavanand9/kudos-app.git)
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
- Start the Django backend at **http://localhost:8000/**
- Start the React frontend at **http://localhost:3000/**
- Start PostgreSQL inside a Docker container

### Running Without Docker

#### Backend (Django)
```sh
cd backend  
pip install -r requirements.txt  
python manage.py migrate  
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

### Creating a Superuser (Django Admin)
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
