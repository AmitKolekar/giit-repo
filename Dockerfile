# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the builder stage
COPY --from=builder /app/dist/employee-leave-management /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
