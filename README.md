# Project Name

## Overview

This project consists of a backend and a frontend application, both of which are containerized using Docker. This README provides instructions on how to set up and run the application in a production environment.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Directory Structure

project-root/
├── backend/
│ ├── Dockerfile
│ ├── requirements.txt
│ └── (other backend files)
├── frontend/
│ ├── Dockerfile
│ ├── package.json
│ └── (other frontend files)
└── docker-compose.yml


## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```
git clone <repository-url>
cd project-root
```


### 2. Build and Run the Application

To build and run the application, execute the following command:

```
docker-compose up --build
```


This command will:

- Build the Docker images for both the backend and frontend.
- Start the containers.

### 3. Access the Application

- The backend will be accessible at `http://localhost:8000`.
- The frontend will be accessible at `http://localhost:3000`.

## Cleaning Up

If you need to delete all old containers and recreate them, follow these steps:

### Stop and Remove All Containers

To stop and remove all containers defined in the `docker-compose.yml`, run:

```
docker-compose down
```



### (Optional) Clean Up Unused Images and Volumes

To clean up unused images and volumes, run:

```
docker system prune -a --volumes
```