# Step 1: Build Angular App
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=builder /app/dist/employee-leave-management /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
