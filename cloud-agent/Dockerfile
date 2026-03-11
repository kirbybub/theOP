FROM node:20-slim

WORKDIR /app

COPY cloud-agent/package.json cloud-agent/package-lock.json cloud-agent/tsconfig.json ./cloud-agent/
WORKDIR /app/cloud-agent
RUN npm ci

WORKDIR /app
COPY cloud-agent ./cloud-agent
COPY shared ./shared

WORKDIR /app/cloud-agent
RUN npm run build

ENV PORT=8080
CMD ["npm", "run", "start"]
