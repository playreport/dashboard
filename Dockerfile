FROM node:lts as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npx nuxt prepare

RUN npx nuxt build

FROM node:lts

WORKDIR /app

COPY --from=builder /app/.output  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", "./server/index.mjs" ]