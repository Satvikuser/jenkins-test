# Simple Dockerfile for the sample Node app
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production --no-audit --no-fund || true

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
