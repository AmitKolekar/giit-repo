# Step 1: Build React App
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve via Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
