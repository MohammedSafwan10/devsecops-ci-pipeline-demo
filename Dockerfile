# syntax=docker/dockerfile:1.7

FROM node:24.17.0-alpine3.23@sha256:7c078d435026a97c8ff97b00d70e2f6ec6298a440e25a9485a9af414d5d37009 AS dependencies

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:24.17.0-alpine3.23@sha256:7c078d435026a97c8ff97b00d70e2f6ec6298a440e25a9485a9af414d5d37009 AS runtime

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./
COPY src ./src

USER appuser
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/health').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "src/server.js"]
