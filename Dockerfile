# Use a multi-stage build to keep the image smaller
# First stage: Build Angular application
FROM node:14 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Second stage: Set up the Nginx server to serve the Angular app
FROM nginx:alpine
COPY --from=builder /app/dist/employee-leave-management /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
