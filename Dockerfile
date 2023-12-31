FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm i
RUN npx prisma db push
RUN npm run build
RUN npm prune --production

FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

ENV NODE_ENV=production
CMD [ "node", "build" ]
