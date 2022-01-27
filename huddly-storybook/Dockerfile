FROM node:16 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build-storybook

# nginx state for serving content
FROM nginx:alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
