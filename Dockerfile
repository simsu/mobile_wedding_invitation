FROM node:22 AS builder
WORKDIR /app

COPY . .
ARG VITE_APP_NAVERMAPS_CLIENT_ID
RUN npm ci && npm run build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
