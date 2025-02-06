# frontend/Dockerfile
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

COPY . .

# Build the frontend for production
RUN npm run build

# Serve the production build using a lightweight server
RUN npm install -g serve
CMD ["serve", "-s", "build"]