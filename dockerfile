FROM node:16-alpine AS build

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build

LABEL "development"="dev"
# Serve Application using Nginx Server

FROM nginx:alpine

COPY --from=build /app/dist/portfolio/ /usr/share/nginx/html

EXPOSE 80