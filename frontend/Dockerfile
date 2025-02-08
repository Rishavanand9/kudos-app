# Build stage
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json first (optimizing build cache)
COPY package.json /app/package.json

# Install dependencies
RUN npm install

# Ensure proper permissions
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache
RUN npm config set unsafe-perm true

# Copy the rest of the app
COPY . /app

# Build the application
RUN npm run build

# Production stage
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Install bash (if needed)
RUN apk add --no-cache bash

# Copy built files from the build stage
COPY --from=build /app /app

# Expose application port
EXPOSE 80

# Start the application
CMD ["npx", "serve", "-s", "build", "-l", "80"]
