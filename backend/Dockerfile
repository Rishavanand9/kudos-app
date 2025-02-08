# Use the official Python image
FROM python:3.10

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 

# Set the working directory inside the container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY app .

# Expose port 8000
EXPOSE 8000

# Start Gunicorn
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]