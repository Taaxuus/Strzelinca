# Etap 1: budowanie aplikacji
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etap 2: obraz produkcyjny
FROM node:22-slim

ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
# Ustawienie zmiennej środowiskowej dla Next.js

CMD ["npm", "start"]
